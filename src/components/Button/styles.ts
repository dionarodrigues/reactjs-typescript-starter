import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: inline-block;
  color: var(--white);
  background: var(--primary-color);
  padding: var(--space-sm);
  text-decoration: none;
`;
