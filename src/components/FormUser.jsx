import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import Loader from "./loader/Loader.jsx";

import { AuthContext } from "../context/AuthProvider.context.jsx";
import { UserContext } from "../context/user.context.jsx";

import { register as registerService } from "../services/auth.services.js";

const FormUser = () => {

    const { setModalState } = useContext(AuthContext);
    const { users, setUsers, userToUpdate, setUserToUpdate } = useContext(UserContext);

    const [isPasswordActive, setIsPasswordActive] = useState(true);
    const [loading, setLoading] = useState(false);

    const { handleSubmit, formState:{errors}, register, reset } = useForm({
        defaultValues: {
            username: userToUpdate?.username || ""
        }
    });

    const handleFormUser = handleSubmit(async(data) => {

        setLoading(true);
        data.estado = JSON.parse(data.estado);
        
        try {

            if(!userToUpdate){
                const registerResponse = await registerService(data);
    
                if(registerResponse.status !== 200 || !registerResponse.status) return toast.error("Error al crear el usuario.");
                
                setUsers([...users, registerResponse.data]);
                toast.success("Usuario registrado exitosamente!");
            } else{
                alert("Actualizar!!!");
            }
            
            setLoading(false);
            setModalState(false);
            reset();
            
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    })

    return (
        <div>
            { loading && <Loader/> }
            <h3 className="font-semibold text-2xl my-2">{ userToUpdate ? "Actualizar usuario" : "Añadir usuario"}</h3>
            {
                userToUpdate && (
                    <div>
                        <img className="rounded-full w-20 h-20 border-4 border-white bg-white" src={userToUpdate.foto.url} />
                        <div className="leading-4 mb-4">
                            <h6 className="font-bold text-lg">{userToUpdate.nombreCompleto}</h6>
                            <p className="text-gray-500">{userToUpdate.email}</p>
                        </div>
                    </div>
                )
            }

            <form onSubmit={handleFormUser} className={`${!userToUpdate && 'mt-8'} flex flex-col gap-4 h-full`}>
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

                <div className="flex w-full flex-col gap-1 pb-4 border-b relative">
                    <label>Contraseña: *</label>
                    <input
                        className="border p-2 rounded-lg border-gray-200 focus:outline-none transition-all outline-none focus:bg-gray-100"
                        type={`${isPasswordActive ? "password" : "text"}`}
                        name="password"
                        id="password"
                        autoComplete="off"
                        placeholder="•••••••••••"
                        {...register("password", {
                            required: {
                              value: true,
                              message: "Por favor ingrese una contraseña.",
                            },
                            minLength: {
                              value: 8,
                              message:
                                "La contraseña debe contener minimo 8 caracteres.",
                            },
                        })}
                    />
                    { errors.password && ( <span className="text-red-500">{ errors.password.message }</span> ) }

                    <div className="absolute top-[45%] right-[3%]">
                        {
                            isPasswordActive ? (
                                <FontAwesomeIcon
                                onClick={() => setIsPasswordActive(false)}
                                className="text-xl text-gray-500 relative z-40"
                                icon={faEye}
                                />
                            ) : (
                                <FontAwesomeIcon
                                onClick={() => setIsPasswordActive(true)}
                                className="text-xl text-gray-500 relative z-40"
                                icon={faEyeSlash}
                                />
                            )
                        }
                    </div>
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
                    <button onClick={(e) => {
                        e.preventDefault();
                        setModalState(false);
                        setUserToUpdate(null);
                    }} className="border border-black text-lg rounded-lg w-full py-2 transition-all font-semibold hover:shadow-lg">Cancelar</button>
                    <button
                        className="bg-black text-white text-lg rounded-lg w-full py-2 transition-all font-semibold hover:shadow-lg">
                            {userToUpdate ? "Actualizar" : "Agregar"}
                    </button>
                </div>
            </form>
            
        </div>
    );
}

export default FormUser;
