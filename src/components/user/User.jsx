import { useContext } from "react";

import { AuthContext } from "../../context/AuthProvider.context";

export default function User() {

  const { user } = useContext(AuthContext);


  return (
    <div className="bg-azul-fuerte py-1 pl-1 pr-4 flex items-center gap-2 cursor-pointer rounded-[50px] text-base">
      <img className="w-8 h-8 rounded-full object-cover" src={user.foto.url} alt="" />
      <h5 className="text-slate-300">{user.username}</h5>
    </div>
  );
}
