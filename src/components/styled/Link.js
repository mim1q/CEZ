import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: block;
  color: ${({theme}) => theme.textPrimaryColor};
  text-decoration: none;
`;
