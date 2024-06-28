import { useContext } from "react";
import "./user.css";
import imgProfile from "../../../public/img-profile.jpg";

import { AuthContext } from "../../context/AuthProvider.context";

export default function User() {

  const { user } = useContext(AuthContext);


  return (
    <div className="user">
      <img className="img-profile" src={user.foto.url} alt="" />
      <h5>{user.username}</h5>
    </div>
  );
}
