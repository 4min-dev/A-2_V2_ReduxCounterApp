import React from 'react'
import '../../../../../../style/css/UI/lists/userList/personalUserLocation.css'
import { PersonalUserCompany } from './PersonalUserCompany'
import { IUserObject } from '../../../../../../ts/interfaces/users/IUserObject'
import { PersonalUserAddress } from './PersonalUserAddress'

export const PersonalUserLocation:React.FC<IUserObject> = ({user}) => {
  return (
    <div className='personalUserLocation'>
      <PersonalUserAddress user={user}/>
      <PersonalUserCompany user={user}/>
    </div>
  )
}