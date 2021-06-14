import React,{useContext} from 'react';
import { GlobalContext } from './GlobalStore';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import keys from './keys';
import {reactLocalStorage} from 'reactjs-localstorage';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './NavBar';
import Footer from './Footer';

const {WEB_BASE_URL,API_LOGIN}=keys;

const Login = () => {
    const {reset,register,formState :{errors},handleSubmit}=useForm();
    const {updateInfo} = useContext(GlobalContext);
    
    const LoginNow= async (data) => {
        const urlLogin=WEB_BASE_URL+API_LOGIN;

        await axios.post(urlLogin,{
            email:data.email,
            password:data.password
        })
        .then(response => {
            const {_id,name,email}=response.data.data;
            const {token}=response.data;

            const newMem={_id,name,email};
            
            reactLocalStorage.setObject('PSInfo',newMem);
            reactLocalStorage.set('PsInfoKey',token);
            
            updateInfo(newMem);

            window.location.assign('/home');

            toast.success("Logged in ",{
                position:"bottom-right",
                duration:2000
            })
        })
            .catch(err => {
                console.log("err in Login",err);
                toast.warning("Incorrect Pasword",{
                    position:"bottom-right",
                    duration:2000
                })
                reset();
            })
        

       
    }
    
    return (
        
        <div>
        <body className="u-body"><header className="u-clearfix u-grey-70 u-header u-sticky u-header" id="sec-2bae"><div className="u-clearfix u-sheet u-valign-middle u-sheet-1-9">
        <NavBar />
      </div></header>
    <section className="u-clearfix u-grey-5 u-section-1-9" id="sec-60c0">
      <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1-9">
        <div className="u-layout" >
          <div className="u-layout-row" >
            <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-size-xs-60 u-white u-layout-cell-1-9" src="">
              <div className="u-container-layout u-container-layout-1-9">
                <div className="u-form u-form-1-9">
                  <form className="u-clearfix u-form-spacing-27 u-form-vertical u-inner-form" style={{padding: "0px"}} source="custom" name="form" onClick={handleSubmit(LoginNow)}>
                    <div className="u-form-group u-form-name u-form-group-1-9">
                      <label htmlFor="email" className="u-form-control-hidden u-label" wfd-invisible="true">Email</label>
                      <input type="email" placeholder="Email" id="email" name="email" className="u-border-2 u-border-grey-5 u-grey-5 u-input u-input-rectangle u-radius-50 u-input-1-9" {...register("email",{required:"Required"})} />
                    </div>
                    <div className="u-form-email u-form-group u-form-group-2-9">
                      <label htmlFor="password" className="u-form-control-hidden u-label" wfd-invisible="true"></label>
                      <input type="password" id="password" name="password" className="u-border-2 u-border-grey-5 u-grey-5 u-input u-input-rectangle u-radius-50 u-input-2-9" placeholder="Password" {...register("password",{required:"Required",minLength:6,maxLength:16})} />
                    </div>
                    <div className="u-align-center u-form-group u-form-submit u-form-group-3-9">
                      <a href="" className="u-active-grey-75 u-border-1 u-border-active-grey-75 u-border-hover-black u-border-palette-2-base u-btn u-btn-round u-btn-submit u-button-style u-hover-black u-palette-2-base u-radius-50 u-btn-1-9"><span className="u-icon"></span>&nbsp;Login<br></br>
                      </a>
                      <input type="submit" value="submit" className="u-form-control-hidden" wfd-invisible="true" />
                    </div>
                    <div className="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                    <div className="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                    <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true" />
                  </form>
                </div>
                <h5 className="u-text u-text-1-9">Not a member?<span className="u-text-palette-2-base">
                    <Link to='/Register'><a href="" className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-hover-palette-1-dark-1 u-text-palette-2-base u-btn-2-9">&nbsp;Register </a></Link>
                  </span>
                </h5>
              </div>
            </div>
            <div className="u-align-center u-container-style u-image u-layout-cell u-right-cell u-size-30 u-size-xs-60 u-image-1-9" src="" data-image-width="700" data-image-height="466">
              <div className="u-container-layout u-valign-middle u-container-layout-2-9" src=""></div>
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

export default Login;

{/* <h1>Welcome to MyStudio</h1>
            <form onSubmit={handleSubmit(LoginNow)}>
                <div classNameNameNameName="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" {...register("email",{required:"Required"})} />
                    {errors.email ? <span classNameNameNameName="err">Incorrect email</span> :null}

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" {...register("password",{required:"Required",minLength:6,maxLength:16})} />
                    {errors.password ? <span classNameNameNameName="err">Incorrect Password</span> : null}

                    <button type="submit" classNameNameNameName="btn2">Login</button>
                </div>
            
            </form>
            <br></br>
            
            <h3>Not a Member?<Link to='/register'> <span classNameNameNameName='register'>Register</span></Link> to sign up</h3> */}