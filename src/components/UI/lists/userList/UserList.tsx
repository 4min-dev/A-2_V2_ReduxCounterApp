import React from 'react'
import '../../../../style/css/lists/userList.css'
import '../../../../style/css/adaptive/lists/userList/userListAdaptive.css'
import { UserInfo } from './UI/userInfo/UserInfo'
import { IUserObject } from '../../../../ts/interfaces/users/IUserObject'
import { UserInteraction } from './UI/userInfo/UserInteraction'

export const UserList:React.FC<IUserObject> = ({user}) => {

  return(
    <div className='userList'>
      <UserInfo user={user}/>
      <UserInteraction user={user}/>
    </div>
  )
}