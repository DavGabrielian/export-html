import React from 'react';
import PropTypes from 'prop-types';
import EmailPreview from './EmailPreview';
import PagePreview from './PagePreview';
import "./preview.scss";

const Preview = ({selectValue, selectedTemp}) => {

    return (
        <>
            {
                selectValue === 'email' ?
                    <EmailPreview selectedTemp={selectedTemp}/> : selectValue === 'page' ?
                        <PagePreview selectedTemp={selectedTemp}/> : null
            }
        </>
    );
};


Preview.propTypes = {
    selectValue: PropTypes.string,
    selectedTemp: PropTypes.string
};


export default Preview;
