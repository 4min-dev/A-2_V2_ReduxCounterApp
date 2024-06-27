import React from 'react'
import '../../../../../../style/css/adaptive/lists/userList/personalUserInfoAdaptive.css'
import { IUser } from '../../../../../../ts/interfaces/users/IUser'

type TPersonalUserInfo = {
  userFullname:string[],
  user:IUser
}

export const PersonalUserInfo:React.FC<TPersonalUserInfo> = ({userFullname, user}) => {
  return (
    <div className='personalUserInfo'>
      <h1>Firstname: {userFullname[0]},</h1>
      <h1>Lastname: {userFullname[1]},</h1>
      <h1>Email: {user.email}</h1> 
      <h1>Phone: {user.phone}</h1>
    </div>
  )
}