import React from 'react';
import PropTypes from 'prop-types';

const EmailPreview = ({selectedTemp}) => {

    const email_left = (
        <div className="left-layout">
            <div className="email-container">
                <div className="email-block">
                    <img
                        src="/SVG/email-layout-circle-icon.svg"
                        width="160"
                        height="160"
                        alt="circle-icon"
                    />
                    <div>
                        <img src="/SVG/facebook-icon.svg" width="26" height="26" alt="icon"/>
                        <img src="/SVG/twitter-icon.svg" width="26" height="26" alt="icon"/>
                        <img src="/SVG/instagram-icon.svg" width="26" height="26" alt="icon"/>
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
            <div className="btn-wrapper">
                <a href='/Html-templates/email/email1.html' download>
                    <button>Export as HTML</button>
                </a>
            </div>
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
                        alt="circle-icon"
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
                        <img src="/SVG/facebook-icon.svg" width="26" height="26" alt="icon"/>
                        <img src="/SVG/twitter-icon.svg" width="26" height="26" alt="icon"/>
                        <img src="/SVG/instagram-icon.svg" width="26" height="26" alt="icon"/>
                    </div>
                </div>
            </div>
            <div className="btn-wrapper">
                 <a href='/Html-templates/email/email2.html' download>
                    <button>Export as HTML</button>
                </a>
            </div>
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
                        alt="circle-icon"
                    />
                    <div>
                        <img src="/SVG/facebook-icon.svg" width="26" height="26" alt="icon"/>
                        <img src="/SVG/twitter-icon.svg" width="26" height="26" alt="icon"/>
                        <img src="/SVG/instagram-icon.svg" width="26" height="26" alt="icon"/>
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
            <div className="btn-wrapper">
                <a href='/Html-templates/email/email3.html' download>
                    <button>Export as HTML</button>
                </a>
            </div>
        </div>
    )

    return (
        <>
            {
                selectedTemp === "left" ?
                    <div>{email_left}</div> : selectedTemp === "center" ?
                        <div>{email_center}</div> : selectedTemp === "right" ?
                            <div>{email_right}</div> : null
            }
        </>
    );
};


EmailPreview.propTypes = {
    selectedTemp: PropTypes.string,
};

export default EmailPreview;

