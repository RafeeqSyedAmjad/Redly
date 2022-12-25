import Avatar from './avatar.png'
import logo from './logo.png'
import { SearchIcon, BellIcon, ChevronDownIcon, UserIcon, LoginIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Button from './Button';
import { useState } from 'react';
import clsx from 'clsx';

export default function Header() {
    const [userDropdownVisibilityClass, setUserDropdownVisibilityClass] = useState("hidden");
    function toggleUserDropdown() {
        if (userDropdownVisibilityClass === 'hidden') {
            setUserDropdownVisibilityClass('block');
        }
        else {
            setUserDropdownVisibilityClass('hidden')
        }
    }

    return (
        <header className="  w-full bg-reddit_dark p-2">
            <div className="mx-4 flex">
                < Image src={logo} alt="/" className="w-8 h-8 mr-4" />
                <form action="" className='bg-reddit_dark-brighter p-1 px-3 flex rounded-md border border-reddit_border mx-4  flex-grow'>
                    <SearchIcon className="text-gray-300 h-7 w-7" />
                    <input type="text" className="bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white" placeholder="Search" />
                </form>
                <div className="flex mr-3 space-x-3 sm:block">
                    <Button className=" bg-black text-red-500">Log In</Button>
                    <Button>Sign Up</Button>
                </div>
                <button onClick={() => toggleUserDropdown()} className='  border-gray-700 flex border  rounded-md ml-2 w-11 bg-gray-700'>
                    <UserIcon ClassName="w-6 h-6 text-gray-400 m-1" />
                    {/* <div className="bg-gray-600 rounded-md w-8 h-8 m-1">
                        <Image className="w-8" src={Avatar} alt="" style={{ filter: 'invert(100%)' }} />

                    </div> */}
                    <ChevronDownIcon className='text-gray-500 w-5 h-5 mt-2' />
                </button>
                <div className={clsx('absolute right-0 top-8 bg-reddit-dark border border-gray-700 z-10 rounded-md text-reddit_text bg-reddit_dark overflow-hidden', userDropdownVisibilityClass)}>
                    <button href="" className="flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm">
                        <LoginIcon className="w-5 h-5 mr-2 " />
                        Log In/Sign Up
                    </button>
                </div>
            </div>
        </header >
    );

}