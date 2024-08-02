import { Suspense, lazy } from "react";
const Sidebar = lazy(() => import("../components/Sidebar.jsx"));
const Navbar = lazy(() => import("../components/Navbar.jsx"));
const Loader = lazy(() => import("../components/loader/Loader.jsx"));


const DashboaradLayout = ({ children }) => {
  return (
    <Suspense fallback={<Loader/>}>
      <div className="pb-8 bg-[#F8F8FB]">
        <div>
          <Navbar />
        </div>
        <div className="flex">
          <Sidebar />
          <div className="w-full h-full max-w-[70%] mt-[-20%]">
            { children }
            <p className="text-gray-500 mt-12">© {new Date().getFullYear()} <span className="text-black font-semibold">{import.meta.env.VITE_COMPANY_NAME}</span>. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default DashboaradLayout;