import React from 'react';
import PropTypes from 'prop-types';

const PagePreview = ({selectedTemp}) => {

  const page_left = (
    <div className="left-layout">
      <div className="page-container">
        <div className="page-block-header">
          <h3>Category Name</h3>
          <h1>Title</h1>
        
          <div>
            <span>Author Name</span>
            <span><img
              src="/SVG/date-icon.svg"
              width="13"
              height="13"
              alt="circle-icon"
            />22/12/2019</span>
                  <span><img
              src="/SVG/view-icon.svg"
              width="15"
              height="15"
              alt="circle-icon"
            />256</span>
          </div>
        </div>

        <div className="page-block-content">
        <img
            src="/SVG/page-layout-1-content-palcaeholder.svg"
            width="400"
            height="350"
            alt="circle-icon"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="page-block-footer">
          <span>Share</span>
          <div>
            <img src="/SVG/facebook-icon.svg" width="24" height="24" alt="icon"/>
            <img src="/SVG/twitter-icon.svg" width="24" height="24" alt="icon"/>
            <img src="/SVG/instagram-icon.svg" width="24" height="24" alt="icon"/>
          </div> 
        </div>
      </div>
      <div className="btn-wrapper">
          <button>
            <a href='/Html-templates/page/page1.html' download>
                Export as HTML
            </a>
          </button> 
      </div>
  </div>
  )

  const page_center = (
    <div className="center-layout">
       <div className="page-container">
        <div className="page-block-header">
        <img
            src="/SVG/page-layout-2-content-palcaeholder.svg"
            width="550"
            height="350"
            alt="circle-icon"
          />
        </div>

        <div className="page-block-container">
        <div className="page-block-footer">
          <span>Share</span>
          <div>
            <img src="/SVG/facebook-icon.svg" width="24" height="24" alt="icon"/>
            <img src="/SVG/twitter-icon.svg" width="24" height="24" alt="icon"/>
            <img src="/SVG/instagram-icon.svg" width="24" height="24" alt="icon"/>
          </div> 
        </div>
        <div className="page-block-content">
        <h1>Title</h1>
        <div>
          <span><img
            src="/SVG/date-icon.svg"
            width="13"
            height="13"
            alt="circle-icon"
          />22/12/2019</span>
        </div> 
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        <img
            src="/SVG/page-layout-2-content-palcaeholder-2.svg"
            width="380"
            height="330"
            alt="circle-icon"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
     </div>
      </div>

      <div className="btn-wrapper">
          <button>
            <a href='/Html-templates/page/page1.html' download>
                Export as HTML
            </a>
          </button> 
      </div>
    </div>
  )

  const page_right = (
    <div className="right-layout">
      <div className="page-container">
      <div className="page-block-header">
        <div className="img-collection">
            <img
              src="/SVG/page-layout-3-content-palcaeholder-small.svg"
              width="40"
              height="40"
              alt="circle-icon"
            />    
            <img
            src="/SVG/page-layout-3-content-palcaeholder-small.svg"
            width="40"
            height="40"
            alt="circle-icon"
            />    
            <img
            src="/SVG/page-layout-3-content-palcaeholder-small.svg"
            width="40"
            height="40"
            alt="circle-icon"
            />
            <img
              src="/SVG/page-layout-3-content-palcaeholder-small.svg"
              width="40"
              height="40"
              alt="circle-icon"
            />
        </div>
        <div className="img-big">
          <img
              src="/SVG/page-layout-3-content-palcaeholder.svg"
              width="340"
              height="300"
              alt="circle-icon"
            />
        </div>
        </div>
        <div className="page-block-content">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna since the 1500s. 
          </p>
         <div className="buttons-wrapper">
            <button>Button</button>
            <button>Button</button>
         </div>
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
        </ul>
        </div>

      </div>
      <div className="btn-wrapper">
          <button>
            <a href='/Html-templates/page/page3.html' download>
              Export as HTML
            </a>
          </button> 
      </div>
  </div>
  )

    return (
      <>
      { 
        selectedTemp === "left" ?
        <div>{page_left}</div> : selectedTemp === "center" ?
        <div>{page_center}</div> : selectedTemp === "right" ?
        <div>{page_right}</div> : null
      }
      </>
    );
};


PagePreview.propTypes = {
  selectedTemp: PropTypes.string,
};


export default PagePreview;
