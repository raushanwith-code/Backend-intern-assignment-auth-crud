import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu, GiFarmTractor, GiWoodCabin } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineFire, AiOutlineHome } from "react-icons/ai";
import { MdVilla, MdApartment, MdOutlineHouse } from "react-icons/md";
import { TbBuildingCottage } from "react-icons/tb";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= FIRST NAVBAR ================= */}
      <div className="w-full h-[40px] border-b bg-white flex items-center justify-between px-2">

        {/* Logo */}
        <img src={logo} alt="logo" className="w-[120px]" />

       
        <div className="flex items-center h-[24px] border rounded-full px-2 w-[260px]">
          <input
            type="text"
            placeholder="Any Where | Any Location | Any City"
            className="
              flex-1 h-full
              text-[10px] text-black
              placeholder:text-gray-500
              text-center leading-none
              bg-transparent outline-none
            "
          />
          <div className="bg-red-500 h-[18px] w-[18px] rounded-full flex items-center justify-center ml-2">
            <FaSearch size={9} className="text-white" />
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex items-center gap-1 text-[10px]">
          <span className="hidden md:block text-gray-700">
            List your home
          </span>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 border rounded-full px-1.5 h-[22px]"
          >
            <GiHamburgerMenu size={12} />
            <CgProfile size={14} />
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 top-7 w-[150px] border bg-white rounded shadow text-[10px]">
              {["Login", "Logout", "List your Home", "My Listing", "Check Booking"].map(
                (item) => (
                  <p key={item} className="px-2 py-1 hover:bg-gray-100">
                    {item}
                  </p>
                )
              )}
            </div>
          )}
        </div>
      </div>

     
      <div className="w-full h-[34px]  bg-white flex items-center justify-center gap-4 text-[9px]">
        <Category icon={<AiOutlineFire size={14} />} label="Trending" />
        <Category icon={<MdVilla size={14} />} label="Villa" />
        <Category icon={<GiFarmTractor size={14} />} label="Farm House" />
        <Category icon={<MdOutlineHouse size={14} />} label="Pool House" />
        <Category icon={<AiOutlineHome size={14} />} label="Rooms" />
        <Category icon={<MdApartment size={14} />} label="Flat" />
        <Category icon={<AiOutlineHome size={14} />} label="PG" />
        <Category icon={<GiWoodCabin size={14} />} label="Cabins" />
        <Category icon={<TbBuildingCottage size={14} />} label="Shops" />
      </div>
    </>
  );
}

function Category({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-[2px] text-black font-light">
      {icon}
      <span>{label}</span>
    </div>
  );
}

export default Nav;
