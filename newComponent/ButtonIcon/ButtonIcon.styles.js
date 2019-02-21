import styled from 'react-emotion';
import { css } from 'emotion';
import withProps from 'recompose/withProps';
import * as colors from '../../src/styles/colors.json';
import * as borders from '../../src/styles/borders.json';
import * as shadow from '../../src/styles/shadows.json';
import * as sizes from '../../src/styles/sizes.json';
import * as elementSizes from '../../src/styles/elementSizes.json';

/* Selects the right background color based on passed props */
const backgroundSelector = (type, mode) => {
  if (!mode) {
    switch (type) {
      case 'primary':
        return colors.blue.base;
      case 'secondary':
        return colors.silver.base;
      case 'success':
        return colors.success;
      case 'error':
        return colors.error;
      case 'warning':
        return colors.warning;
      default:
        return colors.blue.base;
    }
  } else if (mode === 'active') {
    switch (type) {
      case 'primary':
        return colors.active.primary;
      case 'secondary':
        return colors.active.secondary;
      case 'success':
        return colors.active.success;
      case 'error':
        return colors.active.error;
      case 'warning':
        return colors.active.warning;
      default:
        return colors.active.default;
    }
  } else if (mode === 'hover') {
    switch (type) {
      case 'primary':
        return colors.hover.primary;
      case 'secondary':
        return colors.hover.secondary;
      case 'success':
        return colors.hover.success;
      case 'error':
        return colors.hover.error;
      case 'warning':
        return colors.hover.warning;
      default:
        return colors.hover.default;
    }
  }
};

/* Selects the right shadow for button type */
const shadowSelector = (type) => {
  switch (type) {
    case 'primary':
      return shadow.primary;
    case 'secondary':
      return shadow.box;
    case 'success':
      return shadow.success;
    case 'error':
      return shadow.error;
    case 'warning':
      return shadow.warning;
    default:
      return shadow.default;
  }
};

const borderFocusSelector = (type) => {
  switch (type) {
    case 'default':
      return colors.blue.dark15;
    case 'success':
      return colors.green.dark15;
    case 'error':
      return colors.red.dark15;
    case 'warning':
      return colors.orange.dark15;
    default:
      return colors.blue.dark15;
  }
};

/* Selects the right button size based on passed props */
const sizeSelector = (size) => {
  switch (size) {
    case 'xs':
      return elementSizes.xs;
    case 's':
      return elementSizes.s;
    case 'm':
      return elementSizes.m;
    case 'l':
      return elementSizes.l;
    case 'xl':
      return elementSizes.xl;
    case 'xxl':
      return elementSizes.xxl;
    case 'xxxl':
      return elementSizes.xxxl;
    default:
      return elementSizes.m;
  }
};

/* Selects the right icon size based on passed props */
const iconSizeSelector = (size) => {
  switch (size) {
    case 'xs':
      return sizes.xs;
    case 's':
      return sizes.s;
    case 'm':
      return sizes.m;
    case 'l':
      return sizes.l;
    case 'xl':
      return sizes.xl;
    case 'xxl':
      return sizes.xxl;
    case 'xxxl':
      return sizes.xxxl;
    default:
      return sizes.m;
  }
};

const ButtonCommon = withProps({
  createProps: (props) => props.disabled,
})(styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => `${sizeSelector(props.size)}px`};
  height: ${(props) => `${sizeSelector(props.size)}px`};
  border-radius: ${borders.borderRadiusCircle};
  border: ${(props) => `1px solid ${backgroundSelector(props.type)}`};
  &:hover {
    background-color: ${(props) => backgroundSelector(props.type, 'hover')};
    border: ${(props) => `1px solid ${backgroundSelector(props.type, 'hover')}`};
    box-shadow: ${(props) => shadowSelector(props.type)};
  }
  &:focus {
    outline: none;
    background-color: ${(props) => backgroundSelector(props.type, 'active')};
    border: ${(props) => `1px solid ${borderFocusSelector(props.type)}`};
  }
  &:active {
    background-color: ${(props) => backgroundSelector(props.type, 'active')};
    border: ${(props) => `1px solid ${backgroundSelector(props.type, 'active')}`};
    box-shadow: 'none';
  }
  &:disabled {
    background-color: ${colors.disabled.background};
    border: ${borders.borderStandard} ${colors.disabled.border};
    color: ${colors.disabled.color};
    &:hover {
      box-shadow: none;
    }
  }
  svg {
    width: ${(props) => `${iconSizeSelector(props.size)}px`};
    height: ${(props) => `${iconSizeSelector(props.size)}px`};
    fill: white;
  }
`);


const modes = (mode, type) => {
  if (mode === 'ghost') {
    return css`
      background-color: none;
      color: ${type !== 'secondary' ? backgroundSelector(type) : colors.gray.base};
      svg {
        fill: ${type !== 'secondary' ? backgroundSelector(type) : colors.gray.base};
      }
      &:hover, &:active, &:focus {
        color: ${type !== 'secondary' ? 'white' : colors.gray.base};
        svg {
          fill: ${type !== 'secondary' ? 'white' : colors.gray.base};
        }
      }
  `;
  } if (mode === 'minimal') {
    return css`
      background-color: transparent;
      border: none;
      color: ${type !== 'secondary' ? backgroundSelector(type) : colors.gray.base};
      svg {
        fill: ${type !== 'secondary' ? backgroundSelector(type) : colors.gray.base};
      }
      &:hover {
        background: none;
        border: none;
        box-shadow: none;
        svg {
          fill: ${backgroundSelector(type, 'hover')}
        }
      }
      &:active, &:focus {
        background: none;
        border: none;
        svg {
          fill: ${backgroundSelector(type, 'active')}
        }
      }
    `;
  } if (mode === 'flat') {
    return css`
      background-color: transparent;
      border: none;
      height: ${elementSizes.m};
      color: ${type !== 'secondary' ? backgroundSelector(type) : colors.gray.base};
      svg {
        fill: ${type !== 'secondary' ? backgroundSelector(type) : colors.gray.base};
        margin: 0;
      }
      &:hover {
        background: none;
        border: none;
        box-shadow: none;
        svg {
          fill: ${backgroundSelector(type, 'hover')}
        }
      }
      &:active, &:focus {
        background: none;
        border: none;
        svg {
          fill: ${backgroundSelector(type, 'active')}
        }
      }
    `;
  }

  return css`
      background-color: ${backgroundSelector(type)};
      color: ${type !== 'secondary' ? 'white' : colors.gray.base};
    `;
};

const ButtonStyles = styled(ButtonCommon)`
  ${(props) => modes(props.mode, props.type)};
`;


export default ButtonStyles;
