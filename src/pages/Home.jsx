import { Suspense, lazy, useState, useEffect, useContext } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

const Loader = lazy(() => import("../components/loader/Loader.jsx"));
const DashboaradLayout = lazy(() => import("../layout/Dashboarad.layout.jsx"));
const Stadistics = lazy(() => import("../components/Statistics.jsx"));
const Machines = lazy (() => import("../components/Machines.jsx"));
const UserCard = lazy (() => import("../components/UserCard.jsx"));
const Files = lazy (() => import("../components/files/Files.jsx"));

import { getAllUsers } from "../services/user.services.js";

import { AuthContext } from "../context/AuthProvider.context.jsx";


export default function Home() {

  document.title = `Inicio | ${import.meta.env.VITE_COMPANY_NAME}`;

  const { user } = useContext(AuthContext);

  const greetByTime = () => {
    
    const date = new Date();
    
    if (date.getHours() >= 3 && date.getHours() < 12) {
      return { greet: `!Buenos dias, ${user.nombreCompleto}!`, text: "Que tengas un excelente día." }
    } else if (date.getHours() >= 12 && date.getHours() < 19){
      return { greet: `!Buenas tardes, ${user.nombreCompleto}!`, text: "Que tengas un excelente resto de día." }
    } else {
      return { greet: `!Buenas noches, ${user.nombreCompleto}!`, text: "Que tengas un excelente noche." }
    }

  }

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);  
    const getUsersService = async() => {
      try {

        const usersService = await getAllUsers();
        setUsers(usersService);
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getUsersService();

  }, []);


  return (
    <Suspense fallback={<Loader/>}>
      <DashboaradLayout>
          {
            loading ? <Loader/> : (

            <main>

              <div className="pb-8">
                <h1 className="text-4xl font-semibold text-white">{ greetByTime().greet }</h1>
                <p className="text-slate-300">{ greetByTime().text }</p>
              </div>

              <div className="mb-8">
                <Stadistics />
              </div>

              <section className="mb-8">
                <h2 className="text-4xl font-semibold mb-4">Maquinas</h2>
                <div className="flex justify-between gap-[2rem]">
                  <Machines
                    numberMachine="1"
                    state="En proceso"
                    operator="Juan Manuel"
                  />
                  <Machines
                    numberMachine="1"
                    state="En proceso"
                    operator="Juan Manuel"
                  />
                  <Machines
                    numberMachine="1"
                    state="En proceso"
                    operator="Juan Manuel"
                  />
                  <Machines
                    numberMachine="1"
                    state="En proceso"
                    operator="Juan Manuel"
                  />
                </div>
              </section>
              <section className="mb-8">
                <h2 className="text-4xl font-semibold mb-4">Usuarios</h2>
                <div>
                  <Splide
                    options={{
                      perPage: 4,
                      type: "loop",
                      perMove: 1,
                      pagination: false,
                      gap: "1rem",
                      autoplay: true,
                      pauseOnHover: true,
                      interval: 2000
                    }}
                  >
                    {
                      users.map(user => (
                        <SplideSlide key={user._id}>
                          <UserCard
                            name={user.nombreCompleto}
                            username={user.username}
                            document={user.cedula}
                            userType={user.tipoUsuario}
                            img={user.foto}
                            status={user.estado}
                            iconsActive={false}
                          />
                        </SplideSlide>
                      ))
                    }
                  </Splide>
                </div>
              </section>
              <section className="mb-[1rem]">
                <h2 className="text-4xl font-semibold mb-4">Archivos</h2>
                <div className="flex justify-between gap-[2rem] flex-wrap">
                  <Files/>
                  <Files/>
                  <Files/>
                  <Files/>
                </div>
              </section>
            </main>
          )
        }
      </DashboaradLayout>
    </Suspense>

  );
}
