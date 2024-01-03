import React from 'react'
import Image from 'next/image'
import SignupForm from '@/components/forms/SignupForm'
import Link from 'next/link'

const SignUp = () => {
 
  return (
    <>
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
        <div className='auth-card space-y-4 overflow-y-auto py-4 cursor-move hide-scrollbar'>
            <Image
                src={'/images/logo.svg'}
                alt='Stutorpal Logo'
                width={120}
                height={120}
                loading='lazy'
            />
            <h1 className='text-2xl text-normal' style={{fontWeight: '300'}}>Create New Account</h1>
            <SignupForm />
            <p className='w-[fit-content] mx-auto text-sm'>Already have an account? 
              <Link href = '/auth/sign-in' className='text-primary-color'> Login</Link>
            </p>
        </div>
    </>
  )
}

export default SignUp