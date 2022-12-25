import clsx from "clsx"
export default function Input(props) {
    const { className, ...rest } = props;
    const defaultClassName = "bg-reddit_dark-brighter text-reddit_text p-2 border border-reddit_dark-brighter rounded-md block"
    return (
        <input {...props} className={clsx(defaultClassName, className)} />
    );
}

