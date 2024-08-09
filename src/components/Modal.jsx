import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../context/AuthProvider.context.jsx";

const Modal = ({ content }) => {

    const { setModalState, modalState } = useContext(AuthContext);

    return (

        <div className={`${ modalState ? "visible opacity-100" : "hidden opacity-0" } p-10 fixed top-0 left-0 inset-0 bg-[#000000c9] backdrop-blur-sm z-[100] overflow-hidden w-full h-full flex justify-center items-center transition-all`}>
            <div className="custom-scrollbar bg-white  relative w-[500px] h-auto max-h-[98%] max-w-[700px]  py-8 px-4 z-[999] rounded-lg overflow-y-scroll after:absolute after:content-[''] after:bg-gray-200 after:w-[98%] after:rounded-tr-lg after:rounded-tl-lg after:h-[100px] after:top-1 after:left-1 after:z-[-1]">
                {/* <FontAwesomeIcon onClick={() => setModalState(false)} className="cursor-pointer absolute top-5 right-5 w-5 h-5 bg-azul-fuerte text-white p-1 rounded-full text-lg" icon={faXmark} /> */}
                { content }
            </div>
        </div>
    );
}

export default Modal;
