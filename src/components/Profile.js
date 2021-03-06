import React from 'react'
import { useAuth0} from '@auth0/auth0-react'
 /* import JSONPretty from 'react-json-pretty';  */

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
 
 return (
 
  isAuthenticated && (
  <div className="profile">
   <img src={user.picture} alt={user.name} className="userpicture"/>
   <p>{user.nickname}</p>
  
    {/* <JSONPretty data={user}/>   */}
   </div>
  )
 )
}

export default Profile
