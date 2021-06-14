import React,{useState,useContext} from 'react';
import { GlobalContext } from './GlobalStore';
import keys from './keys';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {reactLocalStorage} from 'reactjs-localstorage';
import axios from 'axios';
import { GlobalAlbum } from './GlobalGallery';

const {WEB_BASE_URL,API_UPLOAD} = keys;


const Upload = () => {
    const [title,setTitle] = useState('');
    const [album,setAlbum] = useState([]);

    const {info} = useContext(GlobalContext);
    //const {updateGallery} = useContext(GlobalAlbum)
  
    const uploadImages = async () => {
      
      if(album.length>0){
      const urlUpload=`${WEB_BASE_URL}${API_UPLOAD}${info._id}`;
      console.log("Url Upload :",urlUpload);

      const pskey = reactLocalStorage.get('PsInfoKey');
      const psjwt = pskey;
      
      const formData = new FormData();
      formData.append('title',title);
      for(let i=0;i<album.length;i++){
      formData.append('files',album[i]);
      }
      let config = {
        headers:{
            authorization : "Bearer "+ psjwt
        }
    }
      
      await axios.post(urlUpload,formData,config)
        .then(response => {
            const {album_id,photos}=response.data.data;

            const newAlb = {
              albumId:album_id,
              pics:photos
            } 

            //updateGallery(newAlb)

            setTimeout(() => window.location.assign('/Studio'),2000);

            toast.success("Upload Successful ",{
                position:"bottom-right",
                duration:2000
            })
        })
            .catch(err => {
                console.log("err in Upload",err);
                toast.warning("Error in uploading files",{
                    position:"bottom-right",
                    duration:2000
                })
                
            })
    }
    else{
      toast.warning("Please add files",{
        position:"bottom-right",
        duration:1000
    })
      
    }
    setTimeout(() => window.location.assign('/home'),2000);
  }

    return (
        <div >
            
              <div className="textcontainer">
            
              <input  type="text" className="upload-box" onChange={ (e) => setTitle(e.target.value) }  placeholder="Enter title for your album" required =""/>
              </div>
            <br></br>
            <div className="filecontainer" >
                <input  type="file" className="upload-box" multiple onChange={ (e) => setAlbum(e.target.files) } required="" />
            </div>
          <br></br>
          <div className="buttoncontainer">
              <button className="button-box btn2"  onClick={uploadImages}>upload</button>
            </div> 

        <ToastContainer /> 
        </div>
    )
}

export default Upload;
