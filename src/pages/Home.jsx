import { Suspense, lazy, useState, useEffect } from "react";
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


export default function Home() {

  document.title = `Inicio | ${import.meta.env.VITE_COMPANY_NAME}`;

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
              <div className="mb-8">
                <Stadistics />
              </div>
              <section className="mb-8">
                <h2 className="text-[2rem] font-semibold mb-[1rem]">MAQUINAS</h2>
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
                <h2 className="text-[2rem] font-semibold mb-[1rem]">USUARIOS</h2>
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
                            isInCarousel={false}
                          />
                        </SplideSlide>
                      ))
                    }
                  </Splide>
                </div>
              </section>
              <section className="mb-[1rem]">
                <h2 className="text-[2rem] font-semibold mb-[1rem]">ARCHIVOS</h2>
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
