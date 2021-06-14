const {User} = require('../models/dbmodel');
const {Image} = require('../models/imageModel');
const SECRET_TOKEN=process.env.SECRET_TOKEN;
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');



const createUser = async (req,res) => {
    try {
        console.log("IN createUser");
        const checkEmail = await User.findOne({email:req.body.email});

        if(checkEmail){
            console.log("User already exists");
            return res.status(200).json({
                success:false,
                error : `User ${req.body.email} already exists`
            })
        }

        const hashPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User(
            {
                name:req.body.name,
                email:req.body.email,
                password:hashPassword
            }
        );
        
        const user = await newUser.save();
        const token =createToken(user._id);
        

        res.status(200).json({
            success:true,
            data:{
                _id:user._id,
                name:user.name,
                email:user.email
            },
            token:token
        });

    } catch (error) {
        console.log("DB error.User creation failed : ",error);
        res.status(500).json({
            success:false,
            error:`Server error : ${error.message}`
        })
        
    }
    
    
}

const checkLogin =async (req,res) => {
    try {

        console.log("IN checklogin");
        const user = await User.findOne({email:req.body.email});

        if (!user){
            console.log("No such entity in DB");
            return res.status(200).json({
                success:false,
                error:`email id ${req.body.email} not found `
            })
        }

        const match = await bcrypt.compare(req.body.password,user.password);

        if(match){
            const token=createToken(user._id);

            res.status(200).json({
                success:true,
                data:{
                    _id:user._id,
                    name:user.name,
                    email:user.email
                },
                token:token
            })
        }
        else{
            res.status(400).json({
                success:false,
                error:'Wrong email or Password'
            })
        }

        
    } catch (error) {
        console.log("DB error.Check your details")
        res.status(500).json({
            success:false,
            error:error.message
        })
        
    }

}

// const updateUser =async (req,res) => {
//     try {
//         const user = await userSchema.findById(req.params.id);
//         user.name=req.body.name;
//         user.email=req.body.email;
//         user.password = user.password;

//         const updatedUser = await user.save();
        
//         res.status(200).json({
//             success:true,
//             data:{
//                 _id:updatedUser._id,
//                 name:updatedUser.name,
//                 email:updatedUser.email
//             }
//         })

//         console.log(`User ${user.name} details updated successfully`);
//     } catch (error) {

//         console.log("Updation error:", error.message);
//         res.status(500).json({
//             success:false,
//             message:error.message
//         })
        
//     }
// }

const deleteAlbum = async (req,res) => {
    try {
        const albumId = req.params.albid;
        
        const album = await Image.findByIdAndDelete(albumId);
        const user = await User.findById(req.params.id);
        
        const newAlbum = albumRemove(user.albums,albumId)
        
        user.albums=newAlbum;
        
        await user.save();


        console.log("Album deleted");
        res.status(200).json({
            success:true
        })
        
    } catch (error) {
        console.log("DB cannot delete album :",error.message);
        res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}


const uploadPics = async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        console.log("In uploads :",user.name);
        user.albums=user.albums;
        
        if (!user){
            console.log("No such entity in DB");
            return res.status(200).json({
                success:false,
                error:`Login to Upload `
            })
        }
        
        console.log("In uploads before: ",user.albums);
        
        let imagesArray=[];
        req.files.forEach( ele => {
            const image = {
                fileName : ele.originalname,
                filePath : ele.path,
                fileType : ele.mimetype,
                fileSize : fileSizeFormatter(ele.size, 2)
            }
            imagesArray.push(image);
        });

        const newImages = new Image(
            {

                user:user._id,
                title:req.body.title,
                photos:imagesArray
            }
        );
        
        const album = await newImages.save();
        
        user.albums.unshift(album._id);
        
        const updatedUser = await user.save();

        console.log("In uploads after: ",updatedUser.albums);

        res.status(200).json({
            success:true,
            data:{
                album_id:album._id,
                user:updatedUser._id,
                title:album.title,
                photos:album.photos
            }
            
        })

        console.log(`Uploaded successfully`);

    } catch (error) {
        console.log("Uploading error:", error);
         res.status(500).json({
             success:false,
             message:error.message
         })
        
    }
}

const viewPics = async (req,res) => {

    try {
        const album = await Image.findById(req.params.id);
        res.status(200).json({
            success:true,
            data:{
            picSet:[album.photos,album._id]
            }
        })

        console.log("Album sent!!")
    
    } catch (error) {
        res.status(400).json({
            success:false,
            error:error.message
        })
        
        console.log("View Error : ",error)
    }

}

const getSinglePic = async (req,res) => {
    try {

        const user = await User.findById(req.params.id);
        

        const gallery = user.albums;
        console.log("Gallery : ",gallery[0])


    
        var studioArray = [];
        
        for(let i=0;i<gallery.length;i++){
            
            const album = await Image.findById(gallery[i]);
            console.log("Album :",album)

            required = {
                photo:album.photos[0],
                albumID:album._id
            }
           
                studioArray.push(required);
           
            
        }
        console.log("Arr: ",studioArray);
       
        
        res.status(200).json({
            success:true,
            data:{studio :studioArray}
        })

        console.log("Sent single pic Successfully" )
        
    } catch (error) {

        console.log("Sending single pic Failed : ",error);
        res.status(500).json({
            success:false,
            error : error.message
        })
        
    }


}

const addToAlbum = async (req,res) => {
    try {
        const album = await Image.findById(req.params.id);
        console.log("In adding :",album.title);
        const user = album.user;
        
        if (!user){
            console.log("No such entity in DB");
            return res.status(200).json({
                success:false,
                error:`Login to Upload `
            })
        }
        
        console.log("In adding before: ",album.photos);
        
        
        req.files.forEach( ele => {
            const image = {
                fileName : ele.originalname,
                filePath : ele.path,
                fileType : ele.mimetype,
                fileSize : fileSizeFormatter(ele.size, 2)
            }
            album.photos.unshift(image);
        });

        
        
        await album.save();

        console.log("In uploads after: ",album.photos);

        res.status(200).json({
            success:true,
            data:{
                album_id:album._id,
                photos:album.photos
            }
            
        })

        console.log(`Uploaded successfully`);

    } catch (error) {
        console.log("Uploading error:", error);
         res.status(500).json({
             success:false,
             message:error.message
         })
        
    }

}

// 2 days 24 hours 60 min 60 sec 1000 msec
const maxAge = 2 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
    return jwt.sign({id},SECRET_TOKEN,{
        expiresIn:maxAge
    })

}

const fileSizeFormatter = (bytes,decimal) => {
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes','KB','MB','GB','TB','PB'];
    const index = Math.floor(Math.log(bytes)/Math.log(1000));
    return parseFloat((bytes/Math.pow(1000,index)).toFixed(dm))+' '+sizes[index];
}

function albumRemove(arr, value) {
  
    return arr.filter(function(id){
        return id != value;
    });
   
 }

module.exports={createUser,checkLogin,uploadPics,deleteAlbum,viewPics,getSinglePic,addToAlbum};