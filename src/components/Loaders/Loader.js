import React from 'react';
import PropTypes from 'prop-types';
import './Loader.scss';

const Buff = (props) => {
  return (
    <svg
      style={{ transform: `scale(${props.scale})` }}
      width="44"
      height="44"
      viewBox="0 0 44 44"
      stroke="#4385f5">
      <g fill="none" fillRule="evenodd" strokeWidth="2">
        <circle cx="22" cy="22" r="1">
          <animate
            attributeName="r"
            begin="0s"
            dur="1.8s"
            values="1; 20"
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.165, 0.84, 0.44, 1"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            begin="0s"
            dur="1.8s"
            values="1; 0"
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.3, 0.61, 0.355, 1"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="22" cy="22" r="1">
          <animate
            attributeName="r"
            begin="-0.9s"
            dur="1.8s"
            values="1; 20"
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.165, 0.84, 0.44, 1"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            begin="-0.9s"
            dur="1.8s"
            values="1; 0"
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.3, 0.61, 0.355, 1"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
};

Buff.defaultProps = {
  color: '#4385f5',
};

const Oval = (props) => {
  return (
    <svg {...props} width="38" height="38" viewBox="0 0 38 38" stroke="#4385f5">
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".2" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
};
Oval.defaultProps = {
  color: '#4385f5',
};
Oval.propTypes = {
  color: PropTypes.string,
};

export const Loader = (props) => {
  return (
    <div
      className={
        props.fullscreen ? 'loaderWrapperFullscreen' : 'loaderWrapperMini'
      }>
      {props.fullscreen ? <Buff scale={2} /> : <Oval />}
    </div>
  );
};

Loader.defaultProps = {
  mini: true,
};
Loader.propTypes = {
  fullscreen: PropTypes.bool,
  mini: PropTypes.bool,
};
