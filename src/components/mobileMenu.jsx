import gsap from "gsap";
import { UserContext } from "./user";
import { useGSAP } from "@gsap/react";
import { IoMdClose } from "react-icons/io";
import { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { BiTransfer } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";

const MobileMenu = () => {
  const navBar = [
    { text: "Dashboard", icon: <MdDashboard size={24} /> },
    { text: "Transfers", icon: <BiTransfer size={24} /> },
    { text: "Activity", icon: <FaClockRotateLeft size={24} /> },
    { text: "Settings", icon: <CiSettings size={24} /> },
  ];

  const styling = {
    color: "#497CFF",
  };

  const asideRef = useRef();

  useGSAP(
    () => {
      const menu = asideRef.current;
      const tl = gsap.timeline();

      tl.fromTo(
        menu,
        { xPercent: -100 },
        { xPercent: 0, duration: 0.1 },
      ).fromTo(
        ".animNav",
        { xPercent: -150 },
        { xPercent: 0, duration: 0.1, stagger: 0.05 },
      );
    },
    { scope: asideRef },
  );

  const { setMenuBtn } = useContext(UserContext);

  const closeAnimation = () => {
    const menu = asideRef.current;
    const tl = gsap.timeline();

    tl.fromTo(
      ".animNav",
      { xPercent: 0 },
      { xPercent: -150, duration: 0.1, stagger: 0.05, reversed: true },
    )
      .fromTo(menu, { xPercent: 0 }, { xPercent: -100, duration: 0.1 })
      .call(() => setMenuBtn(false));
  };

  return (
    <aside
      ref={asideRef}
      className="h-dvh max-w-62.5 fixed w-full bg-[#000000] text-white z-100 flex flex-col gap-4"
    >
      <button onClick={closeAnimation} className="p-2 self-center">
        <IoMdClose size={24} />
      </button>

      <div className="border-b border-[#586377] w-full p-5 text-center">
        <h1 className="text-[20px] font-bold">Apex Banking</h1>
      </div>

      <nav className="w-full h-full">
        <ul className="w-full h-full">
          {navBar.map((data, index) => (
            <NavLink
              key={index}
              end={index > 0 ? false : true}
              to={index > 0 ? data.text : "."}
              onClick={closeAnimation}
              style={({ isActive }) => (isActive ? styling : null)}
              className="animNav p-4 flex gap-3 items-center text-[#586377]"
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

export default MobileMenu;
