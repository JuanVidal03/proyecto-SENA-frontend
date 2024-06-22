import React from "react";
import imgProfile from "../../../public/img-profile.jpg";

export default function User() {
  return (
    <div className="bg-azul-fuerte py-1 pl-1 pr-4 flex items-center gap-2 cursor-pointer rounded-[50px] text-base">
      <img className="w-8 h-8 rounded-full object-cover" src={imgProfile} alt="" />
      <h5 className="text-slate-300">Sebasstian Ahr</h5>
    </div>
  );
}
