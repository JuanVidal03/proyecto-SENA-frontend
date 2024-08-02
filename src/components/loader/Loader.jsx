import './loader.css';

const Loader = () => {
    return (
        <div className='absolute top-0 left-0 w-[98.9vw] h-screen flex justify-center items-center bg-[#000000c9] backdrop-blur-sm z-50 overflow-hidden'>
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>           
        </div>
    );
}

export default Loader;
