import React from 'react';
import PropTypes from 'prop-types';
import "./template.scss";

const Template = ({selectValue, setSelectedTemp}) => {

    return (
        <>
        {
            selectValue === "email" ? 
            <div className="temp-container">
                <h4>Template Type</h4>
                <div className="temp-block">
                <div className="temp-items" onChange={ e => setSelectedTemp(e.target.value)}>
                    <input id="radio_1" className="radio isHidden" name="radio_a" type="radio" value="left" />
                    <label htmlFor="radio_1" className="label">
                    <div>
                        <img src="/SVG/email-layout1.svg" width="190" alt="preview" />
                        <span>Left align</span>
                    </div>
                    </label>

                    <input id="radio_2" className="radio isHidden" name="radio_a" type="radio" value="center" />
                    <label htmlFor="radio_2" className="label center">
                    <div value="center">
                        <img src="/SVG/email-layout2.svg" width="190"  alt="preview" />
                        <span>Center align</span>
                    </div>
                    </label>

                    <input id="radio_3" className="radio isHidden" name="radio_a" type="radio" value="right"/>
                    <label htmlFor="radio_3" className="label">
                        <div value="right">
                        <img src="/SVG/email-layout3.svg" width="190"  alt="preview" />
                        <span>Right align</span>
                    </div> 
                    </label>
                </div>
            </div>
            </div> :  
            selectValue === "page" ? 
            <div className="temp-block">
                <div>
                    <img src="/SVG/page-layout1.svg" width="123"  alt="preview" />
                    <span>Left align</span>
                </div>
                <div>
                    <img src="/SVG/page-layout2.svg" width="122"  alt="preview" />
                    <span>Center align</span>
                </div>
                <div>
                    <img src="/SVG/page-layout3.svg" width="147"  alt="preview" />
                    <span>Right align</span>
                </div>
                </div> : null
        }
        </>

    );
};


Template.propTypes = {
    selectValue: PropTypes.string,
    setSelectedTemp: PropTypes.func
};


export default Template;
