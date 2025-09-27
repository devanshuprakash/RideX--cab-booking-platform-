import React from 'react'

const UserLogin = () => {
  return (
    <div className='p-7'>
      <div>
        <img  className="w-16  mb-10 " src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form >
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input type="email" required 
        placeholder='abc@gmail.com'
        className="bg-[#eeeeee] rounded mb-7
        px-4 py-2 w-full text-lg border placeholder:text-base" />

        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input type="password" required placeholder='password' className="bg-[#eeeeee] rounded mb-7
        px-4 py-2 w-full text-lg border placeholder:text-base" />

        <button className="bg-[#111] text-white font-semibold  rounded mb-7
        px-4 py-2 w-full border text-base ">
          Login</button>
      </form>
      </div>
      <div>
         
      </div>
    </div>
  )  
}

export default UserLogin;  