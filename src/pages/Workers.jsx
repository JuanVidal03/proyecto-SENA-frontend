import { Suspense, lazy } from "react";

const DashboaradLayout = lazy(() => import("../layout/Dashboarad.layout.jsx"))
const Loader = lazy(() => import("../components/loader/Loader.jsx"));


const Workers = () => {

  document.title = `Operarios | ${import.meta.env.VITE_COMPANY_NAME}`;

  return (
    <Suspense fallback={<Loader/>}>
      <DashboaradLayout>
        <div>
          <h1>Hola mundo</h1>
        </div>
      </DashboaradLayout>
    </Suspense>
  );
}

export default Workers;