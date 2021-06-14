import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';
import { GlobalContext } from './GlobalStore';
import keys from './keys';
import 'react-toastify/dist/ReactToastify.css';
import Upload from './Upload';
import Modal from 'react-modal';
import { GlobalAlbum } from './GlobalGallery';

Modal.setAppElement('#root');

const { WEB_BASE_URL, API_STUDIO } = keys;

const NavBar = () => {
  const {info,updateInfo} = useContext(GlobalContext);
  const {email} = info;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const{updateAlbum} = useContext(GlobalAlbum);

  // const [title,setTitle] = useState('');
  // const [album,setAlbum] = useState([]);

  

  const ExitNow = () => {

        const newMem = {
            userid:null,
            name:null,
            email:null,
            password:null,
            files:[]
        }

        updateInfo(newMem);
        
        reactLocalStorage.remove('PSInfo');
        reactLocalStorage.remove('PsInfoKey');
        reactLocalStorage.remove('Album');
      

        window.location.assign('/home');
 
    }

    
 


    return (
        <div>
          {email ? (<>
            <nav className="u-align-left u-menu u-menu-dropdown u-offcanvas u-menu-1">
          <div className="menu-collapse" style={{fontSize: "1rem"}}>
            <a className="u-button-style u-custom-active-color u-custom-text-active-color u-custom-text-color u-nav-link" href="#">
              <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 302 302" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-8a8f"></use></svg>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="svg-8a8f" x="0px" y="0px" viewBox="0 0 302 302" style={{enableBackground:"new 0 0 302 302"}} xmlSpace="preserve" className="u-svg-content"><g><rect y="36" width="302" height="30"></rect><rect y="236" width="302" height="30"></rect><rect y="136" width="302" height="30"></rect>
</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </a>
          </div>
          <div className="u-custom-menu u-nav-container">
            <ul className="u-nav u-unstyled u-nav-1"><li className="u-nav-item"><Link to='/home'><a className="u-button-style u-nav-link u-text-active-palette-2-base u-text-body-alt-color u-text-hover-palette-2-base"  style={{padding: "10px 28px"}}>Home</a></Link>
</li><li className="u-nav-item"><Link to='/Studio'><a className="u-button-style u-nav-link u-text-active-palette-2-base u-text-body-alt-color u-text-hover-palette-2-base"  style={{padding: "10px 28px"}} >Studio</a></Link>
</li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-2-base u-text-body-alt-color u-text-hover-palette-2-base"  style={{padding: "10px 28px"}} onClick={ () => { setModalIsOpen( true ) } } >Upload</a>
</li><li className="u-nav-item"><Link to='/home'><a className="u-button-style u-nav-link u-text-active-palette-2-base u-text-body-alt-color u-text-hover-palette-2-base"  style={{padding: "10px 28px"}} onClick={ExitNow}>LogOut</a></Link>
</li></ul>
          </div>
          <div className="u-custom-menu u-nav-container-collapse">
            <div className="u-align-center u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
              <div className="u-sidenav-overflow">
                <div className="u-menu-close"></div>
                <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li className="u-nav-item"><Link to='/home'><a className="u-button-style u-nav-link" style={{padding: "10px 28px"}}>Home</a></Link>
</li><li className="u-nav-item"><Link to='/Studio'><a className="u-button-style u-nav-link"  style={{padding: "10px 28px"}}  >Studio</a></Link>
</li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-2-base u-text-body-alt-color u-text-hover-palette-2-base"  style={{padding: "10px 28px"}} onClick={ () => { setModalIsOpen( true ) } } >Upload</a>
</li><li className="u-nav-item"><Link to='/home'><a className="u-button-style u-nav-link"  style={{padding: "10px 28px"}} onClick={ExitNow}>LogOut</a></Link>
</li></ul>
              </div>
            </div>
            <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
          </div>
        </nav>
        </>) :(<>
          <nav className="u-align-left u-menu u-menu-dropdown u-offcanvas u-menu-1">
          <div className="menu-collapse" style={{fontSize: "1rem"}}>
            <a className="u-button-style u-custom-active-color u-custom-text-active-color u-custom-text-color u-nav-link" href="#">
              <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 302 302" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-8a8f"></use></svg>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="svg-8a8f" x="0px" y="0px" viewBox="0 0 302 302" style={{enableBackground:"new 0 0 302 302"}} xmlSpace="preserve" className="u-svg-content"><g><rect y="36" width="302" height="30"></rect><rect y="236" width="302" height="30"></rect><rect y="136" width="302" height="30"></rect>
</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </a>
          </div>
          <div className="u-custom-menu u-nav-container">
            <ul className="u-nav u-unstyled u-nav-1"><li className="u-nav-item"><Link to='/home'><a className="u-button-style u-nav-link u-text-active-palette-2-base u-text-body-alt-color u-text-hover-palette-2-base"  style={{padding: "10px 28px"}}>Home</a></Link>
</li><li className="u-nav-item"><Link to='/Login'><a className="u-button-style u-nav-link u-text-active-palette-2-base u-text-body-alt-color u-text-hover-palette-2-base"  style={{padding: "10px 28px"}}>Studio</a></Link>
</li><li className="u-nav-item"><Link to='/Login'><a className="u-button-style u-nav-link u-text-active-palette-2-base u-text-body-alt-color u-text-hover-palette-2-base"  style={{padding: "10px 28px"}}>Login</a></Link>
</li><li className="u-nav-item"><Link to='/Register'><a className="u-button-style u-nav-link u-text-active-palette-2-base u-text-body-alt-color u-text-hover-palette-2-base" style={{padding: "10px 28px"}}>Register</a></Link>
</li></ul>
          </div>
          <div className="u-custom-menu u-nav-container-collapse">
            <div className="u-align-center u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
              <div className="u-sidenav-overflow">
                <div className="u-menu-close"></div>
                <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li className="u-nav-item"><Link to='/home'><a className="u-button-style u-nav-link"  style={{padding: "10px 28px"}}>Home</a></Link>
</li><li className="u-nav-item"><Link to='/Login'><a className="u-button-style u-nav-link"  style={{padding: "10px 28px"}}>Studio</a></Link>
</li><li className="u-nav-item"><Link to='/Login'><a className="u-button-style u-nav-link"  style={{padding: "10px 28px"}}>Login</a></Link>
</li><li className="u-nav-item"><Link to='/Register'><a className="u-button-style u-nav-link"  style={{padding: "10px 28px"}}>Register</a></Link>
</li></ul>
              </div>
            </div>
            <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
          </div>
        </nav>
        </>)}
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
      
      <Upload  />
      
      </Modal>

        </div>
        
    )
}

export default NavBar;
