import { Suspense, lazy, useEffect, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const DashboaradLayout = lazy(() => import("../layout/Dashboarad.layout.jsx"))
const Loader = lazy(() => import("../components/loader/Loader.jsx"));
const UserCard = lazy(() => import("../components/UserCard.jsx"));

import { UserContext } from "../context/user.context.jsx";

import { getAllUsers } from "../services/user.services.js";


const Workers = () => {

  document.title = `Operarios | ${import.meta.env.VITE_COMPANY_NAME}`;

  const [loading, setLoading] = useState(false);

  const { users, setUsers } = useContext(UserContext);

  useEffect(() => {

    setLoading(true);
    
    const getAllUsersService = async() => {
      try {
        
        const usersService = await getAllUsers();
        await setUsers(usersService);
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getAllUsersService();

  }, []);


  return (
    <Suspense fallback={<Loader/>}>
      <DashboaradLayout>
        <div>

          <div className="flex justify-between items-center">
            <h1 className="text-3xl text-white">Usuarios registrados</h1>
            <div className="flex items-center gap-6">
              <input
                className="rounded-full p-2 outline-none px-4 text-gray-500"
                type="text"
                placeholder="Filtrar resultados"
              />
              <div className="cursor-pointer relative after:content-[''] after:absolute after:top-[-55%] after:left-[-85%] after:w-12 after:h-12 after:bg-white after:rounded-full">
                <FontAwesomeIcon className="text-xl text-black relative z-10 " icon={faPlus}/>
              </div>
            </div>
          </div>

          {
            loading ? <Loader/> : (
              <div className="grid grid-cols-4 w-full auto-rows-auto gap-8 mt-8">
                {
                  users?.map(user => (
                    <UserCard
                      key={user._id}
                      name={user.nombreCompleto}
                      username={user.username}
                      userType={user.tipoUsuario}
                      address={user.direccion}
                      document={user.cedula}
                      email={user.email}
                      img={user.foto}
                      phone={user.telefono}
                      status={user.estado}
                      iconsActive={true}
                    />
                  ))
                }
                <div className="w-full  rounded-lg flex justify-center items-center border-dotted border-2 transition-all cursor-pointer hover:bg-gray-100">
                  <div className="flex flex-col justify-center items-center gap-2">
                    <FontAwesomeIcon className="text-3xl text-gray-500" icon={faPlus}/>
                    <p className="font-semibold text-gray-500">Crear usuario</p>
                  </div>
                </div>
              </div>
            )
          }
          
        </div>
      </DashboaradLayout>
    </Suspense>
  );
}

export default Workers;