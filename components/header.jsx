import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Link } from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <header>
      <nav>
        <Link href='/'>
          <Image src="/logo.png" alt="Guidely logo" width={200} height={60}></Image>
        </Link>
      </nav>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}

export default Header