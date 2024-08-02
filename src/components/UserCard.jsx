import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPhone, faTrash } from "@fortawesome/free-solid-svg-icons";


const UserCard = ({ name, username, document, userType, img, status, phone, address, email, iconsActive }) => {

  return (
    <div className="w-full h-[400px] bg-white rounded-lg flex flex-col px-4 py-8 items-center justify-center shadow-userCard boder transition-all hover:shadow-userCardHover">
      <figure className="relative mb-4">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src={img.url}
          alt="imagen de perfil"
        />
        <div className={`${status ? "bg-green-500" : "bg-red-500"}  w-6 h-6 absolute top-[70%] right-[-3%] rounded-full border-2 border-white`}></div>
      </figure>
      <p className="font-bold text-center"> { name }</p>
      <p className="text-gray-500 mb-2"> @{ username }</p>

      {
        iconsActive && (
          <div className="border-b w-full mb-4 flex px-4 pb-4 pt-2 items-center justify-around">
            <a href={`tel:+57${phone}`}>
              <FontAwesomeIcon className="cursor-pointer text-gray-500" icon={faPhone}/>
            </a>
            <FontAwesomeIcon className="cursor-pointer text-gray-500" icon={faPenToSquare}/>
            <FontAwesomeIcon className="cursor-pointer text-gray-500" icon={faTrash}/>
          </div>
        )
      }
      
      <p className="text-gray-500">CC: { document }</p>
      <p className="text-gray-500">{ userType }</p>
      <p className="text-gray-500">{ address }</p>
      <p className="text-gray-500">{ email }</p>
    </div>
  );
}

export default UserCard;