import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyles from './ButtonIcon.styles';

const ButtonIcon = (props) => (
  <ButtonStyles {...props}>
    {props.icon}
  </ButtonStyles>
);

ButtonIcon.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning']),
  mode: PropTypes.oneOf(['filled', 'ghost', 'minimal', 'flat']),
  title: PropTypes.string,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
  icon: PropTypes.node,
};

ButtonIcon.defaultProps = {
  disabled: false,
  mode: 'filled',
  size: 'm',
  type: 'primary',
};

export { ButtonIcon as default };
