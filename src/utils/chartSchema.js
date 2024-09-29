import { format } from "date-fns";

export const chartSchema = (seguimientos) => {

    const chartsData = [];
    
    seguimientos.forEach(seguimiento => {
        const datos = [];
        // esquema de los datos a graficar
        seguimiento.datos.forEach(dato => {

            const hour = format(dato.fecha, 'hh:mm a');

            const datosSchema = {
                fecha: hour,
                tempAmbiente: parseFloat(dato.temperaturaAmbiente),
                tempInterna: parseFloat(dato.temperaturaSensor),
            };

            datos.push(datosSchema);
        });

        const formatDate = format(seguimiento.fecha, 'MM/dd/yyyy');

        const schema = {
            _id: seguimiento._id,
            titulo: `Fecha proceso: ${formatDate}`,
            maquina: seguimiento.maquina?.nombre || "Maquina no asignada",
            peso: seguimiento.loteCafe.peso,
            proveedor: seguimiento.loteCafe.proveedor.nombreCompleto,
            tipoProceso: seguimiento.loteCafe.tipoProceso.nombre,
            variedad: seguimiento.loteCafe.variedad.nombre,
            operador: seguimiento.operador?.nombreCompleto,
            datos: datos,
        };

        schema.datos.length > 0 && chartsData.push(schema);

    });

    return chartsData.reverse();

}
