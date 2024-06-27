import React from 'react'
import { IUserObject } from '../../../../../../ts/interfaces/users/IUserObject'

export const CompanyInformation:React.FC<IUserObject> = ({user}) => {
  return (
   <span className='companyInformationContainer'>
<pre>
{`{
  Name: ${user.company.name},
  CatchPhrase: ${user.company.catchPhrase},
  Bs: ${user.company.bs}.
}`}
</pre>
   </span>
  )
}