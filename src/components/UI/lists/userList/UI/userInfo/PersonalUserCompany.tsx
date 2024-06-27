import React from 'react'
import '../../../../../../style/css/UI/lists/userList/companyInformation.css'
import '../../../../../../style/css/adaptive/lists/userList/userCompanyInformationAdaptive.css'
import companyIc from '../../../../../../style/img/svg/companyIc.svg'
import { IUserObject } from '../../../../../../ts/interfaces/users/IUserObject'
import { CompanyInformation } from './CompanyInformation'

export const PersonalUserCompany:React.FC<IUserObject> = ({user}) => {
  return (
    <span className='userCompanyContainer'>
        <img src={companyIc} alt='company_svg'/>
        <CompanyInformation user={user}/>
    </span>
  )
}