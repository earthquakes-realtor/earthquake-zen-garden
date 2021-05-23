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
  text-align: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  max-width: 32rem;
  gap: 1rem;
`;

export const AvatarImage = styled.img`
  height: 100%;
  opacity: 0;
  min-width: 10rem;
  width: 10rem;
  animation: ${fadeIn} 0.15s 0.15s forwards;
`;
