import styled from 'styled-components';

import { fadeIn } from '../../theme';

export const Wrapper = styled.section`
  justify-self: center;
  opacity: 0;
  animation: ${fadeIn} 0.2s forwards;
`;

export const Header = styled.h3`
  margin: 2rem 0;
  color: ${(p) => p.theme.gray[300]};
`;
