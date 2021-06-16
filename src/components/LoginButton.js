import React from 'react';
import { useAuth0} from '@auth0/auth0-react'

const LoginButton = () => {
 const { loginWithRedirect,isAuthenticated } = useAuth0();

 return (
  !isAuthenticated && (
  <button  className="loginBtn" onClick={() => loginWithRedirect()}>
   log In
   </button>
  )
 )
}

export default LoginButton
