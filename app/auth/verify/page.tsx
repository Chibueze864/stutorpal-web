import VerifyForm from '@/components/forms/VerifyForm'
import React from 'react'

const page = () => {
  return (
    <>
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='auth-card h-[fit-content] py-10 space-y-4 '>
                
                <h1 className='text-3xl text-normal' style={{fontWeight: '300'}}>Verification</h1>
                <p className='text-sm text-[#828282]'>
                Enter your 4 digits code that you received on your email.
                </p>
                <VerifyForm />
            </div>
        </div>    
    </>
  )
}

export default page