import React from 'react'
import Image from 'next/image'
import SigninForm from '@/components/forms/SigninForm'
import Link from 'next/link'

const SignIn = () => {
  return (
    <main className='bg-primary-color min-h-screen'>
        <div className='max-w-6xl flex justify-between px-6 mx-auto h-screen items-center'>
            <div className='text-white space-y-5'>
                <h1 className='text-bold md:text-4xl' style={{fontWeight: '700'}}>Learn with us</h1>
                <p className='text-normal md:text-3xl'>Improve your grades with Stutorpal</p>
                <Image
                    src={'/images/auth_layout_image.svg'}
                    alt='Auth Image'
                    width={400}
                    height={400}
                    loading='lazy'
                />
            </div>
            <div className='auth-card space-y-4 overflow-y-auto py-4 hide-scrollbar flex flex-col justify-center'>
                <Image
                    src={'/images/logo.svg'}
                    alt='Stutorpal Logo'
                    width={120}
                    height={120}
                    loading='lazy'
                />
                <h1 className='text-2xl text-normal' style={{fontWeight: '300'}}>Log into your Account</h1>
                <SigninForm />
                <p className='w-[fit-content] mx-auto text-sm'>Don't have an account? 
                  <Link href = '/auth/sign-up' className='text-primary-color'> Signup</Link>
                </p>
            </div>
        </div>
    </main>
  )
}

export default SignIn