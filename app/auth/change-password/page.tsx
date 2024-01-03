import React from 'react'
import Image from 'next/image'
import ResetPasswordForm from '@/components/forms/ResetPassword'

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
                <h1 className='text-2xl text-normal' style={{fontWeight: '300'}}>New Password</h1>
                <p className='text-sm text-[#828282]'>
                Set the new password for your account so you can login and access all features.
                </p>
                <ResetPasswordForm />
            </div>
        </div>    
    </>
  )
}

export default page