import { useState, useContext, lazy, Suspense, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Loader = lazy(() => import("../components/loader/Loader.jsx"));

import { createTipoProceso, updateTipoProceso } from '../services/tipoProcesos.services.js';

import { AuthContext } from '../context/AuthProvider.context.jsx';
import { TipoProcesoContext } from '../context/TipoProceso.context.jsx';

const FormTipoProceso = () => {

    const { setModalState } = useContext(AuthContext);
    const { tipoProcesos, setTipoProcesos, tipoProcesoToUpdate, setTipoProcesoToUpdate } = useContext(TipoProcesoContext);

    const [loading, setLoading] = useState(false);

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            nombre: "",
            descripcion: ""
        }
    });

    // map if tipoProcesoToUpdate change and this change de input value
    useEffect(() => {
        if (tipoProcesoToUpdate) {
            reset({
                nombre: tipoProcesoToUpdate.nombre || "",
                descripcion: tipoProcesoToUpdate.descripcion || ""
            })
        }
    }, [tipoProcesoToUpdate, reset]);

    const handleTipoProceso = handleSubmit(async(data) => {
        setLoading(true);
        try {
            
            // validate if is update or add
            if (tipoProcesoToUpdate) {
                
                const response = await updateTipoProceso(tipoProcesoToUpdate._id, data);
                
                const updatedIndex = tipoProcesos.findIndex(tipoProceso => tipoProceso._id === tipoProcesoToUpdate._id);
                tipoProcesos.splice(updatedIndex, 1, response.data.updatedTipoProceso);
                setTipoProcesos([...tipoProcesos]);
                response.status && response.status === 200 && toast.success("Tipo proceso actualizado exitosamente!");

            } else {
                const response = await createTipoProceso(data);
                setTipoProcesos([...tipoProcesos, response.data.tipoProceso]);
                response.status && response.status === 201 && toast.success("Tipo proceso creado exitosamente!");
            }
            
            reset({
                nombre: "",
                descripcion: ""
            });
            setTipoProcesoToUpdate("")
            setModalState(false);
            setLoading(false);

        } catch (error) {
            toast.error("Error al crear el tipo de proceso.");
            console.log(error);
            return setLoading(false);
        }
    })

    return (
        <Suspense fallback={null}>

            <div>
                { loading && <Loader/>}
                <h3 className="font-semibold text-2xl my-2">{ tipoProcesoToUpdate ? "Actualizar" : "Agregar" } tipo de proceso</h3>
                
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleTipoProceso();
                }}>

                    <div className='flex w-full flex-col gap-1 py-4 border-y mt-8'>
                        <label>Nombre del tipo de proceso: *</label>
                        <input
                            className='border p-2 rounded-lg border-gray-200 focus:outline-none transition-all outline-none focus:bg-gray-100'
                            type="text"
                            placeholder='Beneficiado Natural o Secado en Cereza'
                            autoComplete='off'
                            {
                                ...register("nombre", {
                                    required: {
                                        value: true,
                                        message: "Este campo es obligatorio.",
                                    }
                                })
                            }
                        />
                            { errors.nombre && ( <span className="text-red-500">{ errors.nombre.message }</span> ) }
                    </div>

                    <div className='flex w-full flex-col gap-1 mb-8 mt-5'>
                        <label>Descripcion del tipo de proceso: *</label>

                        <textarea
                            placeholder='En este método, los granos de café se secan con toda la cereza intacta, sin despulpar. Después de la recolección, las cerezas se extienden en camas o patios al sol para secarse durante semanas.'
                            className='border h-[150px] p-2 rounded-lg border-b focus:outline-none transition-all outline-none focus:bg-gray-100'
                            {
                                ...register("descripcion", {
                                    required: {
                                        value: true,
                                        message: "Este campo es obligatorio."
                                    }
                                })
                            }
                        >
                        </textarea>
                        { errors.descripcion && ( <span className="text-red-500">{ errors.descripcion.message }</span> ) }
                    </div>

                    <div className="flex gap-4">
                        <button
                            type='button'
                            onClick={(e) => {
                                e.preventDefault();
                                setModalState(false);
                                setTipoProcesoToUpdate("");
                                reset({
                                    nombre: "",
                                    descripcion: ""
                                });
                            }}
                            className="border border-black text-lg rounded-lg w-full py-2 transition-all font-semibold hover:shadow-lg"
                        >Cancelar</button>
                        <button
                            type='submit'
                            className="bg-black text-white text-lg rounded-lg w-full py-2 transition-all font-semibold hover:shadow-lg">
                                { tipoProcesoToUpdate ? "Actualizar" : "Agregar" }
                        </button>
                    </div>

                </form>

            </div>
        </Suspense>

    );
}

export default FormTipoProceso;
