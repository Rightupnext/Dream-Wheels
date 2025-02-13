import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import logo from "../../images/loogoo.png"
import Navbar from './ui/Navbar';

function Header() {
    const {user,isSignedIn}=useUser();
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
        <div className='flex  col'>
        <Link to={'/'}>
            {/* <img src={logo} width={180} height={80} /> */}
            {/* <Navbar/> */}
        </Link>
        <Link to={'/'}>
        {/* <h1 className='mt-3 ml-4 font-bold text-xl text-[#d90429]'>Dream Wheels </h1> */}
        </Link>
        </div>
        
        <ul className='hidden  md:flex gap-16'>
        <Link to={'/'}>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-black'>Home</li>
        </Link>
        <Link to={"/contact"}>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-black'>Contact</li>
            </Link>
            <li className='text-red-600 font-medium hover:scale-105 transition-all cursor-pointer hover:text-[#d90429] border-solid'>+91 8838620347</li>
            <li className='text-red-600 font-medium hover:scale-105 transition-all cursor-pointer hover:text-[#d90429]'>+91 9025760713</li>
        </ul>

        {isSignedIn?
            <div className='flex items-center gap-5'>
                <UserButton/>
                <Link to={'/profile'}>
                    <Button>POST FREE ADD </Button>
                </Link>
            </div>
            :
            <SignInButton mode="modal" fallbackRedirectUrl='/profile'>
            <Button>POST FREE ADD</Button>
            </SignInButton>
        }

    </div>
  )
}

export default Header