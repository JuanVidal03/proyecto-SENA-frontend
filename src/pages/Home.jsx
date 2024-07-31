import { Suspense, lazy } from "react";

const Loader = lazy(() => import("../components/loader/Loader.jsx"));
const DashboaradLayout = lazy(() => import("../layout/Dashboarad.layout.jsx"));
const Stadistics = lazy(() => import("../components/Statistics.jsx"));
const Machines = lazy (() => import("../components/Machines.jsx"));
const Operators = lazy (() => import("../components/Operators.jsx"));
const Files = lazy (() => import("../components/files/Files.jsx"));



export default function Home() {
  return (
    <Suspense fallback={<Loader/>}>
      <DashboaradLayout>
        <main>
          <div className="mb-[1rem]">
            <Stadistics />
          </div>
          <section className="mb-[1rem]">
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
          <section className="mb-[1rem]">
            <h2 className="text-[2rem] font-semibold mb-[1rem]">OPERARIOS</h2>
            <div className="flex justify-between gap-[2rem] flex-wrap">
              <Operators
                nameOperator="Gersain Alexein Chex Tovar"
                numberDocument="1003748678"
                post="Operario"
              />
              <Operators
                nameOperator="Gersain Alexein Chex Tovar"
                numberDocument="1003748678"
                post="Operario"
              />
              <Operators
                nameOperator="Gersain Alexein Chex Tovar"
                numberDocument="1003748678"
                post="Operario"
              />
              <Operators
                nameOperator="Gersain Alexein Chex Tovar"
                numberDocument="1003748678"
                post="Operario"
              />
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
      </DashboaradLayout>
    </Suspense>

  );
}
