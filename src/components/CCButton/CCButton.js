import "./CCButton.scss";

import React from "react";
import PropTypes from "prop-types";
const classNames = require('classnames');


const CCButton = ({
  children,
  fontSize,
  borderColor,
  fontColor,
  disable,
  showBorder,
  backgroundColor,
  onClickCallBack,
  hoverBackgroundHover
}) => {

  const buildStyles = () => {
      return (
        {
          fontSize: `${fontSize}px`,
          color: fontColor,
          borderColor,
          backgroundColor
        }
      )
  }

  const buildClassNames = () => {
      return (
          classNames('cc-button',
              {
                  '-disabled': disable,
                  '-no-border': !showBorder
              }
          )
      )
  }

  const onChangeBackground = () => {
    if (!hoverBackgroundHover) return null;
  }

  return (
      <button
          onClick={(e) => onClickCallBack(e)}
          onMouseOver={() => onChangeBackground()}
          className={buildClassNames()}
          style={buildStyles()}
      >
          {
            children
          }
      </button>
  );
};

CCButton.propTypes = {
  children: PropTypes.shape,
  fontSize: PropTypes.number,
  borderColor: PropTypes.string,
  fontColor: PropTypes.string,
  disable: PropTypes.bool,
  showBorder: PropTypes.bool,
  backgroundColor: PropTypes.string,
  onClickCallBack: PropTypes.func,
  hoverBackgroundHover: PropTypes.bool
};

CCButton.defaultProps = {
  children: null,
  fontSize: 14,
  borderColor: '#111',
  fontColor: '#111',
  disable: false,
  showBorder: true,
  backgroundColor: '#FFF',
  hoverBackgroundHover: false,
  onClickCallBack: () => null
};

export default CCButton;
