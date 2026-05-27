import { NavLink } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { BiTransfer } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";

const Menu = () => {
  const navBar = [
    { text: "Dashboard", icon: <MdDashboard size={24} /> },
    { text: "Transfers", icon: <BiTransfer size={24} /> },
    { text: "Activity", icon: <FaClockRotateLeft size={24} /> },
    { text: "Settings", icon: <CiSettings size={24} /> },
  ];

  const styling = {
    color: "#497CFF",
  };

  return (
    <aside className="h-full max-w-[256px] w-full bg-[#000000] flex flex-col gap-4 max-[768px]:hidden">
      <div className="border-b border-[#586377] w-full p-5">
        <h1 className="text-[20px] font-bold text-white">Apex Banking</h1>
      </div>

      <nav className="w-full h-full">
        <ul className="w-full h-full">
          {navBar.map((data, index) => (
            <NavLink
              style={({ isActive }) => (isActive ? styling : null)}
              to={index > 0 ? data.text.toLowerCase() : "."}
              key={index}
              end={index > 0 ? false : true}
              className="p-4 flex gap-3 items-center text-[#586377]"
            >
              {data.icon}
              <li className="text-xs font-semibold">{data.text}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
