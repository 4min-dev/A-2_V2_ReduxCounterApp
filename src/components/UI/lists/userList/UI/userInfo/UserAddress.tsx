import React from 'react'
import { IUserObject } from '../../../../../../ts/interfaces/users/IUserObject'

export const UserAddress:React.FC<IUserObject> = ({user}) => {
  return (
    <span className='userAddressContainer'>
<pre>
{`{ 
  City: ${user.address.city},
  Street: ${user.address.street},
  Suite: ${user.address.suite}.
}`}
</pre>
    </span>
  )
}