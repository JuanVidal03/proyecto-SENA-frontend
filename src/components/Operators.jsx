import imgProfile from "../assets/img-profile.jpg";


const Operators = ({ nameOperator, numberDocument, post }) => {
  return (
    <div className="w-full max-w-[22%] bg-white rounded-xl flex flex-col p-4 items-center justify-center shadow-lg">
      <img
        className="w-24 h-24 rounded-full object-cover"
        src={imgProfile}
        alt="imagen de perfil"
      />
      <p className="text-lg font-medium">NOMBRE</p>
      <p> {nameOperator}</p>
      <p className="font-medium text-center">DOCUMENTO DE IDENTIDAD</p>
      <p>{numberDocument}</p>
      <p className="font-medium">CARGO</p>
      <p>{post}</p>
    </div>
  );
}

export default Operators;