import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'
import { LogOut } from 'lucide-react'
import { auth } from '@clerk/nextjs/server'

const Navbar = async () => {
  const { has } = await auth()
  const plan = has({ plan: 'basic' }) ? 'basic' : has({ plan: 'core' }) ? 'core' : 'pro';

  return (
    <nav className='navbar'>
        <Link href='/'>
            <div className='flex items-center gap-2.5 cursor-pointer max-sm:hidden'>
                <Image src='/images/logofinal.png' alt='logo' width={60} height={60} />
            </div>
        </Link>
        <div className='flex items-center gap-8'>
            <NavItems />

            <div className='flex gap-3'>
              <SignedOut>
                <SignInButton>
                  <button className='btn-signin'>Sign In</button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className='rounded-full animate-pulse px-2 py-1 bg-gradient-to-r from-amber-300 to-amber-500 w-fit'>
                  <Link href='/subscription'>
                    <button className='cursor-pointer'>Choose Plan</button>
                  </Link>
                </div>
                <div className='subject-badge py-0.5 px-2 capitalize my-auto max-sm:hidden'>
                  {plan}
                </div>
                <UserButton />
                <SignOutButton>
                  <button className='cursor-pointer text-amber-600 max-sm:hidden'><LogOut size={22} /></button>
                </SignOutButton>
              </SignedIn>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
