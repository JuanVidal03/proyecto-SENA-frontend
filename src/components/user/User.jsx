import React from "react";
import "./user.css";
import imgProfile from "../../../public/img-profile.jpg";

export default function User() {
  return (
    <div className="user">
      <img className="img-profile" src={imgProfile} alt="" />
      <h5>Sebasstian Ahr</h5>
    </div>
  );
}
