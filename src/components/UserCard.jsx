import imgProfile from "../assets/img-profile.jpg";


const UserCard = ({ name, username, document, userType, img, status, phone, address, email }) => {
  return (
    <div className="w-full max-w-[22%] h-[350px] bg-white rounded-lg flex flex-col px-4 py-8 items-center justify-center shadow-userCard boder transition-all hover:shadow-userCardHover">
      <figure className="relative mb-4">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src={img.url}
          alt="imagen de perfil"
        />
        <div className={`${status ? "bg-green-500" : "bg-red-500"}  w-6 h-6 absolute top-[70%] right-[-3%] rounded-full border-2 border-white`}></div>
      </figure>
      <p className="font-bold mb-2 text-center"> { name }</p>
      <p className="text-gray-500"> @{ username }</p>
      <p className="text-gray-500">CC: { document }</p>
      <p className="text-gray-500">{ userType }</p>
      <p className="text-gray-500">{ phone }</p>
      <p className="text-gray-500">{ address }</p>
      <p className="text-gray-500">{ email }</p>
    </div>
  );
}

export default UserCard;