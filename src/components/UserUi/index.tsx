import { useRouter } from 'next/router';
import React from 'react';
import { FaPen, FaCog, FaTimes, FaUsers } from 'react-icons/fa';

import { UserUiAvatar, UserUiContainer, UserUiLogout, UserUiSettings, UserUiUsers } from './styles';

const UserUi: React.FC = () => {
  const router = useRouter();

  return (
    <UserUiContainer>
      <UserUiAvatar>
        <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="user-avatar" />
        <div>
          <FaPen size={20} />
        </div>
      </UserUiAvatar>
      <UserUiSettings onClick={() => router.push('/dashboard')}>
        <FaCog size={20} />
      </UserUiSettings>
      <UserUiUsers onClick={() => router.push('/dashboard')}>
        <FaUsers size={20} />
      </UserUiUsers>
      <UserUiLogout>
        <FaTimes size={20} />
      </UserUiLogout>
    </UserUiContainer>
  );
};

export { UserUi };
