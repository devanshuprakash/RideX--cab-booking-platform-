import React from 'react'

const UserLogin = () => {
  return (
    <div className='p-7'>
      <form >
        <h3 className='text-xl mb-2'>What's your email</h3>
        <input type="email" required placeholder='abc@gmail.com' />
        <h3>Enter Password</h3>
        <input type="password" required placeholder='password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default UserLogin