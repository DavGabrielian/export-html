import React, {useState} from 'react';
import PropTypes from 'prop-types';
import "./template.scss";

const Template = ({selectValue}) => {
    const [selectedColor, setSelectedColor] = useState(null);

    const selectBlock = () => {

    }

    return (
        <>
            <h4>Template Type</h4>
        {
            selectValue === "email" ? 
            <div className="temp-block">
                <div style = {{borderColor: selectedColor}}
                    onClick = {selectBlock}>
                    <img src="/SVG/email-layout1.svg" width="190" alt="preview" />
                    <span>Left align</span>
                </div>
                <div>
                    <img src="/SVG/email-layout2.svg" width="190"  alt="preview" />
                    <span>Center align</span>
                </div>
                <div>
                    <img src="/SVG/email-layout3.svg" width="190"  alt="preview" />
                    <span>Right align</span>
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

};


export default Template;
