import React from "react";
import Layout from "../../layout/Layout";
import Statistics from "../../components/statistics/Statistics";
import Machines from "../../components/machines/Machines";
import Operators from "../../components/operators/Operators";
import Files from "../../components/files/Files";
export default function Home() {
  return (
    <Layout>
      <main>
        <div className="mb-[1rem]">
          <Statistics />
        </div>
        <section className="mb-[1rem]">
          <h2 className="text-[2rem] font-semibold mb-[1rem]">MAQUINAS</h2>
          <div className="flex justify-between gap-[2rem] flex-wrap">
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
    </Layout>
  );
}
