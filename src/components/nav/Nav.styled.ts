import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.theme.gray[100]};
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  justify-content: space-between;
`;

export const Image = styled.img`
  height: 2.5rem;
`;

export const Title = styled.h1`
  color: ${(p) => p.theme.gray[200]};
`;

export const AccountLink = styled(Link)`
  color: ${(p) => p.theme.secondary};
`;
