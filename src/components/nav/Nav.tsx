import React, { FC } from 'react';

import { useDataContext } from '../../context';

import { NavView } from './Nav.view';

const Nav: FC = () => {
  const { site, profile, loading } = useDataContext();

  if (loading) return null;

  const { title, logoImage } = site || {};
  const { firstName } = profile || {};

  return <NavView title={title} logoImage={logoImage} userName={firstName} />;
};

export default Nav;
