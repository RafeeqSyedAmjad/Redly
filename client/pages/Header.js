import Avatar from './avatar.png'
import logo from './logo.png'
import { SearchIcon, BellIcon, ChevronDownIcon, UserIcon, LoginIcon, LogoutIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Button from './Button';
import { useState, useContext } from 'react';
import clsx from 'clsx';
import AuthModalContext from './AuthModalContext';
import UserContext from './UserContext';
import OutsideClickHandler from 'react-outside-click-handler';

export default function Header() {
    const [userDropdownVisibilityClass, setUserDropdownVisibilityClass] = useState("hidden");

    // const [hidden, setHidden] = useState(false);

    function toggleUserDropdown() {
        if (userDropdownVisibilityClass === 'hidden') {
            setUserDropdownVisibilityClass('block');
        }
        else {
            setUserDropdownVisibilityClass('hidden')
        }
    }

    const authModal = useContext(AuthModalContext);
    const user = useContext(UserContext);


    return (
        <header className="w-full bg-reddit_dark p-2">
            <div className="mx-4 flex relative">
                < Image src={logo} alt="/" className="w-8 h-8 mr-4" />
                <form action="" className='bg-reddit_dark-brighter px-3 flex rounded-md border border-reddit_border mx-4  flex-grow'>
                    <SearchIcon className="text-gray-300 h-6 w-6 mt-1" />
                    <input type="text" className="bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white" placeholder="Search" />
                </form>
                {!user.username && (
                    <div className="mx-2 hidden space-x-3 sm:block">
                        <Button className=" bg-black text-red-500 h-8 mr-1" onClick={() => authModal.setShow('login')}>Log In</Button>
                        <Button className="h-8" onClick={() => authModal.setShow('register')} >Sign Up</Button>
                    </div>
                )}

                <OutsideClickHandler onOutsideClick={() => setUserDropdownVisibilityClass('hidden')}>
                    <button onClick={() => toggleUserDropdown()} className='rounded-md flex ml-4 border border-gray-700'>
                        {!user.username && (
                            <UserIcon className="w-6 h-6 text-gray-400 m-1" />
                        )}
                        {user.username && (
                            <div className="bg-gray-600 rounded-md w-8 h-8">
                                <Image className="w-8 block" src={Avatar} alt="" style={{ filter: 'invert(100%)' }} />
                            </div>
                        )}

                        <ChevronDownIcon className='text-gray-500 w-5 h-5 mt-2 m-1' />
                    </button>

                    <div className={clsx('absolute right-0 top-8 bg-reddit-dark border border-gray-700 z-10 rounded-md text-reddit_text bg-reddit_dark overflow-hidden', +userDropdownVisibilityClass)}>
                        {user.username && (
                            <span className="block w-50 py-2 px-3  text-sm">
                                Hello, {user.username}!
                            </span>
                        )}
                        {!user.username && (
                            <button href="" className=" flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm" onClick={() => authModal.setShow('login')}>
                                <LoginIcon className="w-5 h-5 mr-2 " />
                                Log In/Sign Up
                            </button>
                        )}
                        {user.username && (
                            <button href="" className=" flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm" onClick={() => user.logout()}>
                                <LogoutIcon className="w-5 h-5 mr-2 " />
                            </button>
                        )}
                    </div>
                </OutsideClickHandler>
            </div>
        </header >
    );

}