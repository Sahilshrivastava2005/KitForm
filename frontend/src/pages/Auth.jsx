import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUp from '../components/SignUp';

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <LoginForm onSwitch={() => setShowLogin(false)} />
      ) : (
        <SignUp onSwitch={() => setShowLogin(true)} />
      )}
    </div>
  );
}