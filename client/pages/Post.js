import Link from "next/link";
export default function Post(props) {

    return (
        <div className="px-6 text-reddit_text pb-4">
            <Link href={{
                pathname: '/comments/[id]',
                query: { id: props._id }
            }} className=" block border border-reddit_border hover:border-reddit_text  bg-reddit_dark-brighter p-2 rounded-md hover:cursor-pointer">
                <h5 className="text-reddit_text-darker text-sm mb-1">Posted by u/{props.author} 5 hours ago:{props.postedAt}</h5>
                <h2 className="text-xl mb-3">{props.title}</h2>
                <div className="text-sm leading-6">
                    {props.body}
                </div>
            </Link>
        </div >
    )
}
