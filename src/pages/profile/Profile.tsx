import React from 'react';

import { DetailsList } from '../../components';
import { useDataContext } from '../../context';

import { AvatarImage, Header, ProfileContainer, Wrapper } from './Profile.styled';

const profileSchema = [
  { description: 'First name', key: 'firstName' },
  { description: 'Last Name', key: 'lastName' },
  { description: 'Phone', key: 'phone' },
  { description: 'Email', key: 'email' },
  { description: 'Bio', key: 'bio' },
];

const Profile = () => {
  const { profile, loading } = useDataContext();

  if (!profile || loading) return null;

  return (
    <Wrapper>
      <Header>Profile</Header>
      <ProfileContainer>
        <AvatarImage src={profile.avatarImage} alt="avatar-image" />
        <DetailsList data={profile} schema={profileSchema} />
      </ProfileContainer>
    </Wrapper>
  );
};

export default Profile;
