import React,{useState,useContext} from 'react';
import { GlobalContext } from './GlobalStore';
import keys from './keys';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {reactLocalStorage} from 'reactjs-localstorage';
import axios from 'axios';
import { GlobalAlbum } from './GlobalGallery';

const {WEB_BASE_URL,API_ADD} = keys;


const AddtoAlbum = () => {
    
    const [pics,setPics] = useState([]);

    const {album} = useContext(GlobalAlbum);
    //const {updateGallery} = useContext(GlobalAlbum)
    
  
    const addImages = async () => {
      
      if(pics.length>0){
      const urlAdd=`${WEB_BASE_URL}${API_ADD}${album[1]}`;
      console.log("Url Add :",urlAdd);

      
      const formData = new FormData();
      
      for(let i=0;i<pics.length;i++){
      formData.append('files',pics[i]);
      }
     
      
      await axios.post(urlAdd,formData)
        .then(response => {
            const {album_id,photos}=response.data.data;

            const newAlb = {
              albumId:album_id,
              pics:photos
            } 

            //updateGallery(newAlb)

            setTimeout(() => window.location.assign('/Studio'),2000);

            toast.success("Added Successfully ",{
                position:"bottom-right",
                duration:1000
            })
        })
            .catch(err => {
                console.log("err in Uploading to album",err);
                toast.warning("Error in uploading files",{
                    position:"bottom-right",
                    duration:1000
                })
                
            })
            
    }
    else{
      toast.warning("Please add files",{
        position:"bottom-right",
        duration:1000
    })
      
    }
    //window.location.assign('/home',1000)
  }

    return (
        <div >
            
            <div className="filecontainer" >
                <input  type="file" className="upload-box" multiple onChange={ (e) => setPics(e.target.files) } required="" />
            </div>
          <br></br>
          <div className="buttoncontainer">
              <button className="button-box btn2"  onClick={addImages}>Add</button>
            </div> 

          <ToastContainer />
          </div>
    )
        
        
}

export default AddtoAlbum;
