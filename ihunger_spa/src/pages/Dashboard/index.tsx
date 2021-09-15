/* eslint-disable no-unused-expressions */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const history = useHistory();

  const exit = () => {
    signOut();
    history.push('/');
  };

  return (
    <button type="button" onClick={exit}>
      Sair
    </button>
  );
};

export default Dashboard;
