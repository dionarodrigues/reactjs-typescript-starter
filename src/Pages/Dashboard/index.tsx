import React from 'react';
import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Button label="About Page" path="/about" />
    </>
  );
};

export default Dashboard;
