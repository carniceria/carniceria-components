import "./CCTooltip.scss";

import React from "react";
import PropTypes from "prop-types";
const classNames = require('classnames');

const CCTooltip = ({
  children,

}) => {

    const buildTooltip = () => {
        return (
            <div>
                {children[1]}
            </div>
        )
    }

    return (
        <div>
            {children[0]}
            <div>
                { buildTooltip() }
            </div>
        </div>
    );
};

CCTooltip.propTypes = {
  children: PropTypes.shape,
};

CCTooltip.defaultProps = {
  children: null,
};

export default CCTooltip;
