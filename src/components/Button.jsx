
const Button = ({ color, textColor, paddingTop, path, text }) => {
    return (
        <div className={`w-full pt-${paddingTop}`}>
            <a className={`group relative inline-flex border-2 border-${color} focus:outline-none w-full sm:w-auto`} href={`#${path}`}>
                <span className={`w-full text-${textColor} inline-flex items-center justify-center self-stretch px-4 py-2 text-lg text-center font-medium bg-${color} ring-1 ring-${color} ring-offset-1 ring-offset-${color} transform transition-transform group-hover:-translate-y-2 group-hover:translate-x-2 group-focus:-translate-y-1 group-focus:-translate-x-1`}>{text}</span>
            </a>
        </div>
    );
}

export default Button;
