import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { routes } from '../../utils';

import { AccountLink, Image, Title, Wrapper } from './Nav.styled';
import { INavViewProps } from './types';

export const NavView: FC<INavViewProps> = ({ logoImage, title, userName }) => (
  <Wrapper>
    <Link to={routes.home}>
      <Image src={logoImage} />
    </Link>
    <Title>{title}</Title>
    <AccountLink to={routes.profile}>{`Welcome ${userName}`}</AccountLink>
  </Wrapper>
);
