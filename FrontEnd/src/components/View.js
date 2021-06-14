import React,{useContext, useState} from 'react';
import keys from './keys';
import NavBar from './NavBar';
import Footer from './Footer';
import { GlobalContext } from './GlobalStore';
import { GlobalAlbum } from './GlobalGallery';
import Modal from 'react-modal';
import AddtoAlbum from './AddtoAlbum';

Modal.setAppElement('#root');

const View = () => {
    const {album} = useContext(GlobalAlbum);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const pictures = album[0];

    console.log("In view pictures:",pictures);
    
    return (
        <div>
              <body class="u-body"><header class="u-clearfix u-grey-70 u-header u-sticky u-header" id="sec-2bae"><div class="u-clearfix u-sheet u-valign-middle u-sheet-1-5">
          <NavBar />
      </div></header>
    <section class="u-align-center u-clearfix u-palette-1-dark-2 u-section-1-5" id="sec-3d79">
      <div class="u-clearfix u-sheet u-sheet-1-5">

        <div class="u-expanded-width u-gallery u-layout-grid u-lightbox u-show-text-always u-gallery-1-5" id="carousel-a3f9">
          <div class="u-gallery-inner u-gallery-inner-1-5" role="listbox">

            {pictures.map(ele => 

            <div class="u-effect-hover-liftUp u-gallery-item u-gallery-item-1-5">
              <div class="u-back-slide">
                <img class="u-back-image u-expanded" src={`http://localhost:5000/${ele.filePath}`} alt="" />
              </div>
              <div class="u-over-slide u-over-slide-1-5">
                <h3 class="u-gallery-heading"></h3>
                <p class="u-gallery-text"></p>
              </div>
            </div>
            
            )}
          </div>
        </div>
         <a  class="u-align-center u-btn u-button-style u-hover-white u-palette-3-base u-btn-1-5" onClick={ () => { setModalIsOpen( true ) } } >ADD</a> 
      </div>
    </section>
    
    <Footer />
  </body>
  <Modal isOpen= { modalIsOpen } style={{
      overlay: {
      position: 'fixed',
      top: '20%',
      left:'20%',
      right: '20%',
      bottom: '20%',
      backgroundColor: 'grey'
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '60px',
       border: '1px solid #ccc',
       backgroundImage: 'images/uploaderbg.jpg',
      overflow: 'auto',
       WebkitOverflowScrolling: 'touch',
       borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }}
             onRequestClose= { () => setModalIsOpen(false)}   

       >
      
      <AddtoAlbum  />
      
      </Modal>
            
        </div>
    )
}

export default View;


