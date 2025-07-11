import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUp from '../components/SignUp';

export default function Auth({user,setUser}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <LoginForm user={user} setUser={setUser} onSwitch={() => setShowLogin(false)} />
      ) : (
        <SignUp user={user} setUser={setUser} onSwitch={() => setShowLogin(true)} />
      )}
    </div>
  );
}