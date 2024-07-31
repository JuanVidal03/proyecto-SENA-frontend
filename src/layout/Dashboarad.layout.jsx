import { Suspense, lazy } from "react";
const Sidebar = lazy(() => import("../components/Sidebar.jsx"));
const Navbar = lazy(() => import("../components/Navbar.jsx"));
const Loader = lazy(() => import("../components/loader/Loader.jsx"));


const DashboaradLayout = ({ children }) => {
  return (
    <Suspense fallback={<Loader/>}>
      <div className="pb-12">
        <div>
          <Navbar />
        </div>
        <div className="flex">
          <Sidebar />
          <div className="w-full max-w-[70%] relative mt-[-8.5%]">{children}</div>
        </div>
      </div>
    </Suspense>
  );
}

export default DashboaradLayout;