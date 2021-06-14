import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
// import {Link} from 'react-router-dom';

const Home = () => {
   
    return (
       
        <div>
        <body className="pg-body u-overlap"><header className="u-clearfix u-grey-70 u-header u-sticky u-header" id="sec-2bae"><div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        
        <NavBar />
      
      </div></header>
    <section id="carousel_a59f" className="u-carousel u-slide u-block-314b-1" data-u-ride="carousel" data-interval="5000">
      <ol className="u-absolute-hcenter u-carousel-indicators u-block-314b-2">
        <li data-u-target="#carousel_a59f" data-u-slide-to="0" className="u-active u-grey-30"></li>
        <li data-u-target="#carousel_a59f" className="u-grey-30" data-u-slide-to="1"></li>
      </ol>
      <div className="u-carousel-inner" role="listbox">
        <div className="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-1-1" src="" data-image-width="1200" data-image-height="627">
          <div className="u-clearfix u-sheet u-sheet-1">
            <h1 className="u-text u-title u-text-1" data-animation-name="rollIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="">MyStudio</h1>
            <a href="#" className="u-btn u-button-style u-palette-2-base u-btn-1">Read More</a>
          </div>
        </div>
        <div className="u-align-left u-carousel-item u-clearfix u-image u-shading u-section-1-2" src="" data-image-width="768" data-image-height="500">
          <div className="u-clearfix u-sheet u-sheet-1"></div>
        </div>
      </div>
      <a className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-text-grey-30 u-block-314b-3" href="#carousel_a59f" role="button" data-u-slide="prev">
        <span aria-hidden="true">
          <svg viewBox="0 0 477.175 477.175"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
                    c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"></path></svg>
        </span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-text-grey-30 u-block-314b-4" href="#carousel_a59f" role="button" data-u-slide="next">
        <span aria-hidden="true">
          <svg viewBox="0 0 477.175 477.175"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                    c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"></path></svg>
        </span>
        <span className="sr-only">Next</span>
      </a>
    </section>
    <section className="u-align-center u-clearfix u-section-2" id="sec-d97a">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-expanded-width u-list u-list-1">
          <div className="u-repeater u-repeater-1">
            <div className="u-align-center u-container-style u-list-item u-repeater-item u-list-item-1" data-animation-name="zoomIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="Down">
              <div className="u-container-layout u-similar-container u-container-layout-1"><span className="u-icon u-icon-circle u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512.00578" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-77bb"></use></svg><svg className="u-svg-content" viewBox="0 0 512 512.00578" id="svg-77bb"><path d="m507.523438 148.890625-138.667969-144c-4.523438-4.691406-11.457031-6.164063-17.492188-3.734375-6.058593 2.453125-10.027343 8.320312-10.027343 14.847656v69.335938h-5.332032c-114.6875 0-208 93.3125-208 208v32c0 7.421875 5.226563 13.609375 12.457032 15.296875 1.175781.296875 2.347656.425781 3.519531.425781 6.039062 0 11.820312-3.542969 14.613281-9.109375 29.996094-60.011719 90.304688-97.28125 157.398438-97.28125h25.34375v69.332031c0 6.53125 3.96875 12.398438 10.027343 14.828125 5.996094 2.453125 12.96875.960938 17.492188-3.734375l138.667969-144c5.972656-6.207031 5.972656-15.976562 0-22.207031zm0 0"></path><path d="m448.003906 512.003906h-384c-35.285156 0-63.99999975-28.710937-63.99999975-64v-298.664062c0-35.285156 28.71484375-64 63.99999975-64h64c11.796875 0 21.332032 9.535156 21.332032 21.332031s-9.535157 21.332031-21.332032 21.332031h-64c-11.777344 0-21.335937 9.558594-21.335937 21.335938v298.664062c0 11.777344 9.558593 21.335938 21.335937 21.335938h384c11.773438 0 21.332032-9.558594 21.332032-21.335938v-170.664062c0-11.796875 9.535156-21.335938 21.332031-21.335938 11.800781 0 21.335937 9.539063 21.335937 21.335938v170.664062c0 35.289063-28.714844 64-64 64zm0 0"></path></svg></span>
                <h3 className="u-text u-text-1">Sharing</h3>
              </div>
            </div>
            <div className="u-align-center u-container-style u-list-item u-repeater-item u-list-item-2" data-animation-name="zoomIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="Down">
              <div className="u-container-layout u-similar-container u-container-layout-2"><span className="u-icon u-icon-circle u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512.056 512.056" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-d288"></use></svg><svg className="u-svg-content" viewBox="0 0 512.056 512.056" x="0px" y="0px" id="svg-d288" style={{enableBackground:"new 0 0 512.056 512.056"}}><g><g><g><path d="M426.635,188.224C402.969,93.946,307.358,36.704,213.08,60.37C139.404,78.865,85.907,142.542,80.395,218.303     C28.082,226.93-7.333,276.331,1.294,328.644c7.669,46.507,47.967,80.566,95.101,80.379h80v-32h-80c-35.346,0-64-28.654-64-64     c0-35.346,28.654-64,64-64c8.837,0,16-7.163,16-16c-0.08-79.529,64.327-144.065,143.856-144.144     c68.844-0.069,128.107,48.601,141.424,116.144c1.315,6.744,6.788,11.896,13.6,12.8c43.742,6.229,74.151,46.738,67.923,90.479     c-5.593,39.278-39.129,68.523-78.803,68.721h-64v32h64c61.856-0.187,111.848-50.483,111.66-112.339     C511.899,245.194,476.655,200.443,426.635,188.224z"></path><path d="M245.035,253.664l-64,64l22.56,22.56l36.8-36.64v153.44h32v-153.44l36.64,36.64l22.56-22.56l-64-64     C261.354,247.46,251.276,247.46,245.035,253.664z"></path>
</g>
</g>
</g></svg></span>
                <h3 className="u-text u-text-2">Storing</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
    
  </body>
           
        </div>
    
         
         
    )
}

export default Home;
