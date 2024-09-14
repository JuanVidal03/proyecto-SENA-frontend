import { NavLink  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartLine,
  faPlantWilt,
  faUsers,
  faGears,
  faLayerGroup,
  faLeaf
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {

  const menuItems = [
    { title: "Inicio", icon: faHouse, route: '/dashboard' },
    { title: "Usuarios", icon: faUsers, route: '/usuarios' },
    { title: "Maquinas", icon: faGears, route: '/maquinas' },
    { title: "Procesos", icon: faLeaf, route: '/procesos' },
    { title: "Variedades", icon: faLayerGroup, route: '/variedades' },
    { title: "Seguimientos", icon: faChartLine, route: '/seguimientos' }
  ]

  return (
    <aside className="w-full max-w-[25%] flex justify-center pt-8 sticky">
      <div className="w-full max-w-[80%] grid grid-cols-2 auto-rows-auto absolute gap-4 px-7">
        {
          menuItems.map((menuItem, index) => (
            <NavLink
              key={index}
              className={({isActive}) => `${isActive ? "bg-azul-iconos" : "text-azul-iconos"} w-[113px] transition-all h-[113px] flex flex-col justify-center items-center rounded-2xl group`}
              to={menuItem.route}
            >
              {
                ({isActive}) => (
                  <div className="w-full text-center text-gray-500">
                    <FontAwesomeIcon className={`${isActive ? "text-white font-bold" : "group-hover:text-azul-iconos"} text-4xl transition-all`} icon={menuItem.icon} />
                    <p className={`${isActive ? "text-white font-bold" : "group-hover:text-azul-iconos"} mt-1 transition-all`}>{menuItem.title}</p>
                  </div>
                )
              }
            </NavLink>
          ))
        }
      </div>
    </aside>
  );
}

export default Sidebar;