type ButtonProps = {
    className: string;
    text: string;
    href: string;
    type: "submit" | "reset" | "button" | undefined;
}

export const Button = ({ className, text, href, type } : ButtonProps) => {
    return (
        <button className={className} type={type} ref={href}>
            {text}
        </button>
    )
}
