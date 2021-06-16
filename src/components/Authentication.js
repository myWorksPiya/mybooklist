import LoginButton from './LoginButton';
import LogOutButton from './LogOutButton';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react'

import React from 'react'

function Authentication() {
 const { isLoading } = useAuth0();
 if (isLoading) {
  return (
   <div>
    Loading...
   </div>
  )
 }
  return (
   <div>
    <LoginButton />
    <LogOutButton />
    <Profile />
   </div>
  )
 }

export default Authentication

