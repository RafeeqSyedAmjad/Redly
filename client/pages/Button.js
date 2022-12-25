import clsx from 'clsx';

export default function Button(props) {
    const { className, ...rest } = props;
    const deafaultClassnames = "border border-gray-300 bg-gray-300 text-reddit_dark rounded-full px-2 font-bold text-sm font-bold"
    return (
        <button {...props} className={clsx(deafaultClassnames, className)} />
    );
}

