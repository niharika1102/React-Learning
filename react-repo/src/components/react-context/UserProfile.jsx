import React, {useContext} from 'react'
import { UserContext } from './UserContext'

const UserProfile = () => {
    const user = useContext(UserContext);
  return (
      <div className='flex flex-col border border-white w-max p-4'>
          <h1 className='text-xl font-bold mb-4'>Hello, {user?.name}</h1>
          <p>Age: {user?.age}</p>
          <p>Gender: {user?.gender}</p>
    </div>
  )
}

export default UserProfile