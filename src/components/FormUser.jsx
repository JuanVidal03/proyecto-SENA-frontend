import { useContext } from "react";
import { useForm } from "react-hook-form";

import profileImg from "../assets/login-bg.jpg"

import { AuthContext } from "../context/AuthProvider.context.jsx";

import { register as registerService } from "../services/auth.services.js";

const FormUser = ({ isUpdate }) => {

    const { setModalState } = useContext(AuthContext);

    const { handleSubmit, formState:{errors}, register } = useForm();

    const handleFormUser = handleSubmit(async(data) => {

        data.telefono = parseInt(data.telefono);
        data.estado = JSON.parse(data.estado);
        
        try {
            const registerResponse = await registerService(data);
            console.log(data);
            console.log(registerResponse);
            setModalState(false);
            
        } catch (error) {
            console.log(error);
        }
    })

    return (
        <div>
            <h3 className="font-semibold text-2xl my-2">{ isUpdate ? "Actualizar usuario" : "Añadir usuario"}</h3>
            {
                isUpdate && (
                    <div>
                        <img className="rounded-full w-20 h-20 border-4 border-white" src={profileImg} />
                        <div className="leading-4 mb-4">
                            <h6 className="font-bold text-lg">Carlos Perez</h6>
                            <p className="text-gray-500">carlosperez19@gmail.com</p>
                        </div>
                    </div>
                )
            }

            <form className={`${!isUpdate && 'mt-8'} flex flex-col gap-4 h-full`} onSubmit={handleFormUser}>
                <div className="flex w-full flex-col gap-1 py-4 border-y">
                    <label>Nombre de usuario: *</label>
                    <input
                        className="border p-2 rounded-lg border-gray-200 focus:outline-none transition-all outline-none focus:bg-gray-100"
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="off"
                        placeholder="carlosPerez19"
                        {
                            ...register("username", {
                                required: {
                                    value: true,
                                    message: "Este campo es obligatorio."
                                }
                            })
                        }
                    />
                    { errors.username && ( <span className="text-red-500">{ errors.username.message }</span> ) }
                </div>

                <div className="flex w-full flex-col gap-1 pb-4 border-b">
                    <label>Nombre completo: *</label>
                    <input
                        className="border p-2 rounded-lg border-gray-200 focus:outline-none transition-all outline-none focus:bg-gray-100"
                        type="text"
                        name="nombreCompleto"
                        id="nombreCompleto"
                        autoComplete="off"
                        placeholder="Carlos Perez"
                        {
                            ...register("nombreCompleto", {
                                required: {
                                    value: true,
                                    message: "Este campo es obligatorio."
                                }
                            })
                        }
                    />
                    { errors.nombreCompleto && ( <span className="text-red-500">{ errors.nombreCompleto.message }</span> ) }
                </div>

                <div className="flex gap-4 border-b pb-4">
                    <div className="flex w-full flex-col gap-1">
                        <label>Numero de cedula: *</label>
                        <input
                            className="border p-2 rounded-lg border-gray-200 focus:outline-none transition-all outline-none focus:bg-gray-100"
                            type="text"
                            name="cedula"
                            id="cedula"
                            autoComplete="off"
                            placeholder="1234567892"
                            {
                                ...register("cedula", {
                                    required: {
                                        value: true,
                                        message: "Este campo es obligatorio."
                                    },
                                    minLength: {
                                        value: 7,
                                        message: "Este campo tiene que tener como minimo 7 caracteres."
                                    },
                                    pattern: {
                                        value: /^[0-9]+$/i,
                                        message: "Solo son permitidos numeros."
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Este campo tiene que tener como maximo 10 caracteres."
                                    } 
                                })
                            }
                        />
                        { errors.cedula && ( <span className="text-red-500">{ errors.cedula.message }</span> ) }
                    </div>

                    <div className="flex w-full flex-col gap-1">
                        <label>Telefono: *</label>
                        <input
                            className="border p-2 rounded-lg border-gray-200 focus:outline-none transition-all outline-none focus:bg-gray-100"
                            type="text"
                            name="telefono"
                            id="telefono"
                            autoComplete="off"
                            placeholder="3146574353"
                            {
                                ...register("telefono", {
                                    required: {
                                        value: true,
                                        message: "Este campo es obligatorio."
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "Este campo tiene que tener como minimo 10 caracteres."
                                    },
                                    maxLength:{
                                        value: 10,
                                        message: "Este campo tiene que tener como maximo 10 caracteres."
                                    },
                                    pattern: {
                                        value: /^[0-9]+$/i,
                                        message: "Solo son permitidos numeros."
                                    }
                                })
                            }
                        />
                        { errors.telefono && ( <span className="text-red-500">{ errors.telefono.message }</span> ) }
                    </div>
                </div>

                <div className="flex w-full flex-col gap-1 pb-4 border-b">
                    <label>Dirrección: *</label>
                    <input
                        className="border p-2 rounded-lg border-gray-200 focus:outline-none transition-all outline-none focus:bg-gray-100"
                        type="text"
                        name="direccion"
                        id="direccion"
                        autoComplete="off"
                        placeholder="Calle 5 # 5 - 46"
                        {
                            ...register("direccion", {
                                required: {
                                    value: true,
                                    message: "Este campo es obligatorio."
                                }
                            })
                        }
                    />
                    { errors.direccion && ( <span className="text-red-500">{ errors.direccion.message }</span> ) }
                </div>

                <div className="flex w-full flex-col gap-1 pb-4 border-b">
                    <label>Correo eléctronico: *</label>
                    <input
                        className="border p-2 rounded-lg border-gray-200 focus:outline-none transition-all outline-none focus:bg-gray-100"
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        placeholder="carlosperez19@gmail.com"
                        {
                            ...register("email", {
                                required: {
                                    value: true,
                                    message: "Este campo es obligatorio."
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                    message: "El formato del email no es válido."
                                }
                            })
                        }
                    />
                    { errors.email && ( <span className="text-red-500">{ errors.email.message }</span> ) }
                </div>

                <div className="flex gap-4 border-b pb-4">
                    <div className="flex w-full flex-col gap-1">
                        <label>Estado: *</label>
                        <select
                            className="border p-2 rounded-lg border-gray-200 focus:outline-none transition-all outline-none focus:bg-gray-100"
                            name="estado"
                            id="estado"
                            {
                                ...register("estado", {
                                    required: {
                                        value: true,
                                        message: "Este campo es obligatorio."
                                    }
                                })
                            }
                        >
                            <option value={true}>Activo</option>
                            <option value={false}>Inactivo</option>
                        </select>
                        { errors.estado && ( <span className="text-red-500">{ errors.estado.message }</span> ) }
                    </div>

                    <div className="flex w-full flex-col gap-1">
                        <label>Tipo de usuario: *</label>
                        <select
                            className="border p-2 rounded-lg border-gray-200 focus:outline-none transition-all outline-none focus:bg-gray-100"
                            name="tipoUsuario"
                            id="tipoUsuario"
                            {
                                ...register("tipoUsuario", {
                                    required: {
                                        value: true,
                                        message: "Este campo es obligatorio."
                                    }
                                })
                            }
                        >
                            <option value="Operario">Operario</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Proveedor">Proveedor</option>
                        </select>
                        { errors.tipoUsuario && ( <span className="text-red-500">{ errors.tipoUsuario.message }</span> ) }
                    </div>
                </div>

                <div className="flex w-full flex-col gap-1 pb-4 border-b">
                    <label>Foto de usuario: </label>
                    <input
                        className="border p-2 rounded-lg border-gray-200 focus:outline-none transition-all outline-none focus:bg-gray-100"
                        type="file"
                        name="foto"
                        id="foto"
                        accept="image/*"
                    />
                </div>

                <div className="flex gap-4">
                    <button onClick={() => setModalState(false)} className="border border-black text-lg rounded-lg w-full py-2 transition-all font-semibold hover:shadow-lg">Cancelar</button>
                    <button className="bg-black text-white text-lg rounded-lg w-full py-2 transition-all font-semibold hover:shadow-lg">Agregar</button>
                </div>
            </form>
            
        </div>
    );
}

export default FormUser;
