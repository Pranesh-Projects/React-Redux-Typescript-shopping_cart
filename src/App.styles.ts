import styled from 'styled-components';
// importing 'iconButton' from 'material ui' for shopping icon
import IconButton from '@material-ui/core/IconButton';

// entire Components
export const Wrapper = styled.div`
  margin: 50px;  // overall size of the items container
`;

// icon button styles
export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 5px;  // icon from right position
  top: 20px;
`;
