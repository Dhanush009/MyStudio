import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import NotFound from './components/NotFound';
import { GlobalStore } from './components/GlobalStore';
import NavBar from './components/NavBar';
import Upload from './components/Upload';
import Studio from './components/Studio';
import View from './components/View';
import AddtoAlbum from './components/AddtoAlbum';
import { GlobalGallery } from './components/GlobalGallery';


const App = () => {
  return (
    <>
       <Router>
        <GlobalStore>
         <div>
 
            
              <div className="container">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                
                <Route path="/Register" component={Register} />
              
                <Route path="/Login" component={Login} />
                
                <GlobalGallery>
                  <Switch>
                
                    <Route path="/view" component={View} />
                    <Route path='/Studio' component={Studio} />
                    <Route path="/Upload" component={Upload} />
                    <Route Path='/add2alb' component={AddtoAlbum} />
                    <Route path="/Navbar" component={NavBar}/>
                
                </Switch>
                </GlobalGallery>

                
                
                <Route path="/*" component={NotFound} />
              </Switch>
            </div>  

          </div>
        </GlobalStore>
      </Router>
    </>
  )
}

export default App;



