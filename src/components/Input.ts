import styled from 'styled-components';
import theme from '../theme';

const Input = styled.input.attrs(props => ({
  type: 'text',
  placeholder: props.placeholder
}))`
  background: ${theme.palette.background.base};
  padding: ${theme.spacing(2)};
  border: none;
  color: ${theme.palette.text.primary};
`;

export default Input;
