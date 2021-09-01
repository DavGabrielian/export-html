import React from 'react';
import PropTypes from 'prop-types';

const EmailPreview = () => {

  const email_left = (
    <div className="left-layout">
    <div className="email-container">
<div className="email-block">
  <img
    src="/SVG/email-layout-circle-icon.svg"
    width="160"
    height="160"
  />
  <div>
    <img src="/SVG/facebook-icon.svg" width="26" height="26" />
    <img src="/SVG/twitter-icon.svg" width="26" height="26" />
    <img src="/SVG/instagram-icon.svg" width="26" height="26" />
  </div>
</div>

<div className="email-block">
    <div>
    <h1>Name Surname</h1>
  <h3>Web Developer</h3>
    </div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </p>
</div>
</div>
      <button>
          <a>
              Export as HTML
          </a>
      </button>
  </div>
  )

  const email_center = (
    <div className="center-layout">
      <div className="email-container">
        <div className="email-block">
          <img
            src="/SVG/email-layout-circle-icon.svg"
            width="160"
            height="160"
          />
          <div>
            <h1>Name Surname</h1>
            <h3>Web Developer</h3>
          </div>
        </div>

        <div className="email-block">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <div className="icons-block">
              <img src="/SVG/facebook-icon.svg" width="26" height="26" />
              <img src="/SVG/twitter-icon.svg" width="26" height="26" />
              <img src="/SVG/instagram-icon.svg" width="26" height="26" />
          </div>
        </div>
      </div>
      <button>
        <a>
          Export as HTML
        </a>
      </button>
  </div>
  )

  const email_right = (
    <div className="right-layout">
    <div className="email-container">
<div className="email-block">
  <img
    src="/SVG/email-layout-circle-icon.svg"
    width="160"
    height="160"
  />
  <div>
    <img src="/SVG/facebook-icon.svg" width="26" height="26" />
    <img src="/SVG/twitter-icon.svg" width="26" height="26" />
    <img src="/SVG/instagram-icon.svg" width="26" height="26" />
  </div>
</div>

<div className="email-block">
    <div>
    <h1>Name Surname</h1>
  <h3>Web Developer</h3>
    </div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </p>
</div>
</div>
      <button>
          <a>
              Export as HTML
          </a>
      </button>
  </div>
  )
  
    return (
      <>
      <div>{email_left}</div>
      <div>{email_center}</div>
      <div>{email_right}</div>
      </>
    );
};


EmailPreview.propTypes = {

};


export default EmailPreview;
