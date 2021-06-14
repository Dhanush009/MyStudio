const jwt=require('jsonwebtoken');
const SECRET_TOKEN = process.env.SECRET_TOKEN;

const checkID = (req,res,next) => {
    
    const auth = req.headers.authorization;
   
    const token = auth.split(' ')[1];

    if(token){
        
        jwt.verify(token,SECRET_TOKEN,(err,decorded) => {
            if(err){
                console.log("checkId error :", err.message);
                res.status(400).json({
                    success:false,
                    message:'Token verification failed'
                })
            }
            else{
                console.log("Token verified :",decorded);
                next();
            }
        })
    
    }
    else{
        console.log("No such token");
        res.status(500).json({
            success:false,
            message:"No Token.Access Denied"
        })
    }

}

module.exports = {checkID};