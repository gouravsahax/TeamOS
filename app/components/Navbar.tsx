'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Navbar = () => {
  const path = usePathname();

  const user = false;

  return (
    <div className="border-b border-white/10 p-2 px-4 flex w-full">
        <div className="flex items-center gap-6 justify-between w-full">
            <h1 className="text-xl font-bold ml-4">TEAM OS</h1>
            <div className="flex items-center gap-6 mr-4">
                <Link href="/" className={path === '/' ? 'text-white/60 border-b border-white' : 'text-white/60 hover:text-white'}>
                Home
                </Link>
                <Link href="/dashboard" className={path === '/dashboard' ? 'text-white/60 border-b border-white' : 'text-white/60 hover:text-white'}>
                Dashboard
                </Link>
                <div>
                {user ? (
                    <Link href="/dashboard" className="text-white/60 hover:text-white">
                    logout
                    </Link>
                ) : (
                    <Link href="/login" className="text-white/60 hover:text-white"> 
                    Login
                    </Link>
                )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
