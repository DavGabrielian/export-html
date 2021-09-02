import React from 'react';
import PropTypes from 'prop-types';
import "./select.scss";

const Select = ({setSelectValue}) => {

    return (
        <div className="select-block">
            <h4>SELECT TEMPLATE</h4>

            <select name="temp" id="temp" onChange={ e => setSelectValue(e.target.value)}>
                <option value="" disabled selected hidden>Select your option</option>
                <option value="email">Email signature layout</option>
                <option value="page">Page layout</option>
            </select>
        </div>
    );
};


Select.propTypes = {
    setSelectValue: PropTypes.func
};


export default Select;