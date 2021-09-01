import React from 'react';
import PropTypes from 'prop-types';

const PagePreview = ({selectedTemp}) => {

    return (
        <h1>
          PagePreview
          {console.log(selectedTemp)}
        </h1>
    );
};


PagePreview.propTypes = {
  selectedTemp: PropTypes.string,
};


export default PagePreview;
