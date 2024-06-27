import React from 'react'
import incgntUserAvatar from '../../../../../../style/img/icons/incgntUserAvatar.png'
import { IUserObject } from '../../../../../../ts/interfaces/users/IUserObject'

export const UserInteraction:React.FC<IUserObject> = ({user}) => {
  return (
    <div className='userInteraction'>
      <h3>ID: {user.id}</h3>
      <img src={incgntUserAvatar} alt='user_avatar'/>
    </div>
  )
}