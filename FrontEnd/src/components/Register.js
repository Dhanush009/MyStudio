import React,{useContext} from 'react';
import { useForm } from 'react-hook-form';
import keys from './keys';
import axios from 'axios';
import { GlobalContext } from './GlobalStore';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {reactLocalStorage} from 'reactjs-localstorage';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
const { WEB_BASE_URL,API_ADD_USER } = keys;


const Register = () => {
    
    const{formState: { errors },register,handleSubmit,reset}=useForm();

    const{updateInfo}=useContext(GlobalContext);
    
    const onSubmit= async (data)=>{
        console.log("in Register",data);
        const addUrl=WEB_BASE_URL+API_ADD_USER;

        await axios.post(addUrl,{
            name :data.name,
            email:data.email,
            password:data.password
        })
        .then(response => {
            const{success,token}=response.data;

            if(success === false){
                console.log('failed response');
                toast.warning('User already registered',{
                    position:"bottom-right",
                    duration : 2000
                });
                return null;
            }
            const{_id,name,email}=response.data.data;

            const newMem={
                _id,name,email
            }


            updateInfo(newMem);
            
            reactLocalStorage.setObject('PSInfo',newMem);
            reactLocalStorage.set('PsInfoKey',token);
            
            reset();

            toast.success(`${data.firstname} registered`,{
                position:"bottom-right",
                duration:2000
            });

            setTimeout(() => window.location.assign('/home'),2000);


        })
        .catch(err => {
            console.log("Error in adding user : ",err);
        })

        }
    
    return (
        <div>
          <body className="u-body"><header className="u-clearfix u-grey-70 u-header u-sticky u-header" id="sec-2bae"><div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        
          <NavBar />

      </div></header>
    <section className="u-clearfix u-section-1-8" id="sec-63fb">
      <div className="u-clearfix u-sheet u-sheet-1-8">
        <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1-8">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-size-30 u-size-60-md">
                <div className="u-layout-col">
                  <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-60 u-layout-cell-1-8">
                    <div className="u-container-layout u-container-layout-1-8">
                      <h2 className="u-text u-text-1-8">Register</h2>
                      <div className="u-form u-form-1-8">
                        <form className="u-clearfix u-form-spacing-27 u-form-vertical u-inner-form" style={{padding: "0px"}} source="custom" name="form" onClick={handleSubmit(onSubmit)}>
                          <div className="u-form-group u-form-name u-form-group-1-8">
                            <label htmlFor="name" className="u-form-control-hidden u-label">Name</label>
                            <input type="text" placeholder="Name" id="name" name="name" className="u-border-2 u-border-grey-5 u-grey-5 u-input u-input-rectangle u-radius-50 u-input-1-8" {...register("name",{required:"Required"})} />
                          </div>
                          <div className="u-form-email u-form-group u-form-group-2-8">
                            <label htmlFor="email" className="u-form-control-hidden u-label" wfd-invisible="true">Email</label>
                            <input type="email" placeholder="Email" id="email" name="email" className="u-border-2 u-border-grey-5 u-grey-5 u-input u-input-rectangle u-radius-50 u-input-2-8" {...register("email",{required:"Required"})} />
                          </div>
                          <div className="u-form-email u-form-group u-form-group-3-8">
                            <label htmlFor="password" className="u-form-control-hidden u-label" wfd-invisible="true"></label>
                            <input type="password" id="password" name="password" className="u-border-2 u-border-grey-5 u-grey-5 u-input u-input-rectangle u-radius-50 u-input-3-8" placeholder="Password" {...register("password",{required:"Required",minLength:6,maxLength:16})} />
                          </div>
                          <div className="u-align-center u-form-group u-form-submit u-form-group-8">
                            <a href="" className="u-active-grey-75 u-border-1 u-border-active-grey-75 u-border-hover-black u-border-palette-2-base u-btn u-btn-round u-btn-submit u-button-style u-hover-black u-palette-2-base u-radius-50 u-btn-1-8"><span className="u-icon"></span>&nbsp;submit<br></br>
                            </a>
                            <input type="submit" value="submit" className="u-form-control-hidden" wfd-invisible="true" />
                          </div>
                          <div className="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                          <div className="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                          <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true" />
                        </form>
                      </div>
                      <h5 className="u-text u-text-2-8">Already a member?<span className="u-text-palette-2-base">
                      <Link to='/Login'><a href="" className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-hover-palette-1-dark-1 u-text-palette-2-base u-btn-2-8">&nbsp;Login </a></Link>
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-size-30 u-size-60-md">
                <div className="u-layout-col">
                  <div className="u-size-30">
                    <div className="u-layout-row">
                      <div className="u-container-style u-image u-image-contain u-layout-cell u-size-60 u-image-1-8" src="" data-image-width="1280" data-image-height="1280">
                        <div className="u-container-layout u-container-layout-2-8"></div>
                      </div>
                    </div>
                  </div>
                  <div className="u-size-30">
                    <div className="u-layout-row">
                      <div className="u-container-style u-image u-image-contain u-layout-cell u-size-60 u-image-2-8" src="" data-image-width="150" data-image-height="150">
                        <div className="u-container-layout u-container-layout-3-8"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
    <ToastContainer />
  </body>
        </div>
    )
}


export default Register;


