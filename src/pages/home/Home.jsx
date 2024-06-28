import React from "react";
import Layout from "../../layout/Layout";
import "./home.css";
import Statistics from "../../components/statistics/Statistics";
import Machines from "../../components/machines/Machines";
import Operators from "../../components/operators/Operators";
import Files from "../../components/files/Files";

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="div-statistics">
          <Statistics />
        </div>
        <section className="div-machines">
          <h2>MAQUINAS</h2>
          <div className="machines">
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
        <section className="div-operators">
          <h2>OPERARIOS</h2>
          <div className="operators">
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
        <section className="div-files">
          <h2>ARCHIVOS</h2>
          <div className="files">
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
