import React from 'react'
import Image from 'next/image'
import ForgotPasswordForm from '@/components/forms/ForgotPasswordForm'

const page = () => {
  return (
    <>
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='auth-card h-[fit-content] py-10 space-y-4 '>
                <Image
                    src={'/images/logo.svg'}
                    alt='Stutorpal Logo'
                    width={120}
                    height={120}
                    loading='lazy'
                />
                <h1 className='text-2xl text-normal' style={{fontWeight: '300'}}>Forgot Password</h1>
                <p className='text-sm text-[#828282]'>
                Enter your email for the verification proccess,we will send 4 digits code to your email.
                </p>
                <ForgotPasswordForm />
            </div>
        </div>    
    </>
  )
}

export default page