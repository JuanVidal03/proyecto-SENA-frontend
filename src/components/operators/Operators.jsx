import React from "react";
import "./operators.css";
import imgProfile from "../../../public/img-profile.jpg";

export default function Operators({ nameOperator, numberDocument, post }) {
  return (
    <div className="operator">
      <img
        className="img-profile-operator"
        src={imgProfile}
        alt="imagen de perfil"
      />
      <p className="name-operator">NOMBRE</p>
      <p> {nameOperator}</p>
      <p className="number-document">DOCUMENTO DE IDENTIDAD</p>
      <p>{numberDocument}</p>
      <p className="post">CARGO</p>
      <p>{post}</p>
    </div>
  );
}
