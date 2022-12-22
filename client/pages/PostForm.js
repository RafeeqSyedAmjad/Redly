import Image from 'next/image'
import Avatar from './avatar.png'
export default function PostForm() {
    return (
        <div className="bg-reddit_dark px-6 py-4 text-gray-400 ">
            <div className="border border-reddit_border p-2 rounded-md flex">
                <div className="rounded-full bg-gray-600 overflow-hidden w-10 h-10">
                    <Image src={Avatar} alt="/" style={{ filter: 'invert(100%)' }} />
                </div>
                <form action="" className='flex-grow bg-reddit_dark-brighter border border-reddit_border ml-4 mr-2 rounded-md' >
                    <input type="text" className=' p-2 px-3 text-sm block w-full rounded-md bg-reddit_dark-brighter focus:outline-none' placeholder="New post" />
                </form>
            </div>
        </div>
    )
}