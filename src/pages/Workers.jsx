import { Suspense, lazy, useEffect, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const DashboaradLayout = lazy(() => import("../layout/Dashboarad.layout.jsx"))
const Loader = lazy(() => import("../components/loader/Loader.jsx"));
const UserCard = lazy(() => import("../components/UserCard.jsx"));
const Modal = lazy(() => import("../components/Modal.jsx"));
const FormUser = lazy(() => import("../components/FormUser.jsx"));

import { UserContext } from "../context/user.context.jsx";
import { AuthContext } from "../context/AuthProvider.context.jsx";

import { getAllUsers } from "../services/user.services.js";


const Workers = () => {

  document.title = `Usuarios | ${import.meta.env.VITE_COMPANY_NAME}`;

  const [loading, setLoading] = useState(false);
  
  const { setModalState } = useContext(AuthContext);
  const { users, setUsers, setUserToUpdate } = useContext(UserContext);
  const [usersFiltered, setUsersFiltered] = useState([]);
  const [usersFilterInput, setUsersFilterInput] = useState("");

  // get all users
  useEffect(() => {

    setLoading(true);

    const getAllUsersService = async() => {
      try {
        
        const usersService = await getAllUsers();

        setUsers(usersService.users);
        setUsersFiltered(usersService.users);
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getAllUsersService();

  }, []);

  // filter the users
  useEffect(() => {
    
    const filterUsers = () => {
    
      const newUsers = users.filter(user =>
        user.username.toLowerCase().includes(usersFilterInput.toLowerCase()) ||
        user.nombreCompleto.toLowerCase().includes(usersFilterInput.toLowerCase()) ||
        user.email.toLowerCase().includes(usersFilterInput.toLowerCase()) ||
        user.telefono.includes(usersFilterInput) || 
        user.tipoUsuario.toLowerCase().includes(usersFilterInput.toLowerCase())
      );

      newUsers.length === 0 ? setUsersFiltered(users) : setUsersFiltered(newUsers);

    }
    filterUsers();

  }, [usersFilterInput]);


  return (
    <Suspense fallback={null}>
      <DashboaradLayout>
        
        <div>

          <Modal content={<FormUser/>}/>

          <div className="flex justify-between items-center">
            <h1 className="text-3xl text-white">Usuarios registrados</h1>
            <div className="flex items-center gap-6">
              <input
                onChange={(e) => setUsersFilterInput(e.target.value)}
                className="rounded-full p-2 outline-none px-4 text-gray-500"
                type="text"
                placeholder="Filtrar resultados"
              />
              <div className="flex justify-center items-center relative w-10 h-10 bg-white rounded-full">
                <button
                  onClick={() => {
                    setModalState(true);
                    setUserToUpdate(null);
                  }}
                  className="flex justify-center items-center relative z-50 w-full h-full"
                >
                  <FontAwesomeIcon className="text-[1rem] text-azul-fuerte relative z-10 " icon={faPlus}/>
                </button>
              </div>
            </div>
          </div>
          {
            loading ? <Loader/> : (
              <div className="grid grid-cols-4 w-full auto-rows-auto gap-8 mt-8">
                {
                  usersFiltered.map(user => (
                    <UserCard
                      key={user._id}
                      id={user._id}
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
                <div
                  onClick={() => {
                    setModalState(true);
                    setUserToUpdate(null);
                  }}
                  className="w-full h-[400px] rounded-lg flex justify-center items-center border-dotted border-2 transition-all cursor-pointer hover:bg-gray-100 bg-gray-50">
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