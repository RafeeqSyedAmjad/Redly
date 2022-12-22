import Avatar from './avatar.png'
import logo from './logo.png'
import { SearchIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="  w-full bg-reddit_dark p-2">
            <div className=" mx-4 flex ">
                < Image src={logo} alt="/" className="w-8 h-8 mr-4" />
                <form action="" className='bg-reddit_dark-brighter p-1 px-3 flex rounded-md border border-reddit_border mx-4  flex-grow'>
                    <SearchIcon className="text-gray-300 h-7 w-7" />
                    <input type="text" className="bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white" placeholder="Search" />
                </form>
                <button className='py-0.5 px-1 bg-gray-600 flex items-center space-x-1  rounded-md '>
                    <Image className="w-8" src={Avatar} alt="" style={{ filter: 'invert(100%)' }} />
                    <ChevronDownIcon className='text-white w-4' />
                </button>
            </div>
        </header>
    );

}