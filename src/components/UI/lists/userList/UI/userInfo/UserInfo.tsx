import React from 'react'
import { PersonalUserInfo } from './PersonalUserInfo'
import { PersonalUserLocation } from './PersonalUserLocation'
import { IUserObject } from '../../../../../../ts/interfaces/users/IUserObject'

export const UserInfo:React.FC<IUserObject> = ({user}) => {

  const userFullname = user.name.split(' ')

  return (
    <div className='userList-usInfo'>
    <PersonalUserInfo userFullname={userFullname} user={user}/>
    <PersonalUserLocation user={user}/>
  </div>
  )
}