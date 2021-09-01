import React from 'react';
import PropTypes from 'prop-types';
import EmailPreview from './EmailPreview';
import PagePreview from './PagePreview';
import "./preview.scss";

const Preview = ({selectValue}) => {

    return (
     <>
        {
            selectValue === 'email' ? 
            <EmailPreview/> : selectValue === 'page' ?
            <PagePreview/> : null
        }
    </>
    );
};


Preview.propTypes = {

};


export default Preview;
