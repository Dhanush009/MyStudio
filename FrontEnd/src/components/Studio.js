import React,{useContext,useState} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { GlobalContext } from './GlobalStore';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import keys from './keys';
import { GlobalAlbum } from './GlobalGallery';
import {reactLocalStorage} from 'reactjs-localstorage';


const { WEB_BASE_URL, API_STUDIO, API_VIEW, API_DELETE_ALBUM } = keys;


const Studio = () => {

  const [gallery,setGallery] = useState([]);
  
  const {info} = useContext(GlobalContext);

  const {updateAlbum} = useContext(GlobalAlbum);


  const albumView = (id) => {

    const viewUrl = `${ WEB_BASE_URL}${API_VIEW}${id}`;
    console.log("ViewUrl :",viewUrl)

    axios.get(viewUrl) 
    .then(response => {
      
      const {picSet} = response.data.data;
      console.log("PICSet :",picSet);
      
      reactLocalStorage.setObject('Album',picSet);
      
      updateAlbum(picSet)
       
    })
    .catch(err => {
      console.log("err in retrieving pics",err);
      toast.warning("Cannot Retrieve Albums",{
          position:"bottom-right",
          duration:1000
      })
  }
    )

     window.location.assign('/view')
}


  const getGalleryFiles =  () => {
    console.log("IN gallery files")
    try {
  
      if(info._id){
        const studioUrl = `${WEB_BASE_URL}${API_STUDIO}${info._id}`;
        
         axios.get(studioUrl )
        .then(response => {
            const {studio} = response.data.data;
            setGallery(studio)
            
        })
        .catch(err => {
            console.log("err in retrieving pics",err);
            toast.warning("Cannot Retrieve Albums",{
                position:"bottom-right",
                duration:1000
            })
        })
  
     }
      
    } catch (error) {
  
      console.log("Studio Error:",error);
      
    }
  }

  const deleteAlbum = (id) => {
    const delUrl=`${WEB_BASE_URL}${API_DELETE_ALBUM}${info._id}/${id}`;
    
    const pskey = reactLocalStorage.get('PsInfoKey');
        let config ={
            headers : {
                authorization : "Bearer "+ pskey
            }
        }

    axios.delete(delUrl,config)
    .then(response => {
        console.log('album deleted'); 
        const{success}=response.data;

        if(success===true){
            toast.success("Album deleted",{
                position:"bottom-right",
                duration:2000
            })
        }


        setTimeout(() => window.location.assign('/Studio'),1000);
    })
    .catch(err => {

        console.log('Album not deleted');
        toast.warning("Album cannot be deleted",{
            position:"bottom-right",
            duration:2000
        })

    })
  }

  console.log("ABC :",gallery)
  
  
    return (
        <div>
          <body className="u-body"><header className="u-clearfix u-grey-70 u-header u-sticky u-header" id="sec-2bae"><div className="u-clearfix u-sheet u-valign-middle u-sheet-1-4">
          <NavBar />
      </div></header>
    <section className="u-align-center u-clearfix u-image u-section-1-4" id="carousel_d2e9" data-image-width="150" data-image-height="99">
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1-4">
        <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-grey-60 u-text-1-4"><b>Studio</b>
        </h2>
        <div className="u-align-center u-border-3 u-border-palette-1-light-2 u-line u-line-horizontal u-line-1-4"></div>
        <button type="button" className="u-btn u-btn-round u-button-style u-grey-60 u-hover-palette-1-dark-1 u-radius-18 u-btn-7-4" onClick={getGalleryFiles}>VIEW ALBUMS</button> 
        <div className="u-expanded-width u-list u-list-1-4">
          <div className="u-repeater u-repeater-1-4">
            {(gallery.length > 0) ? (
              gallery.map(ele => 
              <>
              <div className="u-container-style u-list-item u-opacity u-opacity-65 u-radius-18 u-repeater-item u-shape-round u-white u-list-item-1-4">
              <div className="u-container-layout u-similar-container u-valign-bottom u-container-layout-1-4">
                <img alt="" className="u-expanded-width u-image u-image-default u-image-1-4" data-image-width="900" data-image-height="895" src={`http://localhost:5000/${ele.photo.filePath}`} />
                <div className="u-border-3 u-border-palette-1-base u-expanded-width u-line u-line-horizontal u-line-2-4"></div>
                <a className="u-btn u-btn-round u-button-style u-grey-60 u-hover-palette-1-dark-1 u-radius-18 u-btn-1-4" onClick={() => albumView(ele.albumID)}>VIEW</a> 
                <a className="u-btn u-btn-round u-button-style u-grey-60 u-hover-palette-2-base u-radius-18 u-btn-2-4" onClick = {() => deleteAlbum(ele.albumID)} >DELETE</a>
              </div>
            </div>
              </>
            )) : (
            <>
            
            </>
            )}
            
          </div>
        </div>
        
      </div>
    </section>

    <Footer />
  
  </body>
        </div>
    )
}

export default Studio;

