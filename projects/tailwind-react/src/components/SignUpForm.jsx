import React from 'react'

const SignUpForm = () => {
  return (
    <div className='border flex flex-col items-center justify-center h-[500px]'>
      <h1 className='font-bold text-3xl'>SignUp</h1>
      <form className='flex flex-col gap-2 mt-5' >
      <input type='text' className='input' placeholder='Enter Your Name' />
      <input type='text' className='input' placeholder='Enter Your Email' />
      <input type='text' className='input' placeholder='Enter Your Password' />
      <input type='text' className='input' placeholder='Enter Password Again' />
      <input type='submit' className='rounded bg-green-400 text-white' />
      </form>
    </div>
  )
}

export default SignUpForm
