import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [openNavbar, setopenNavbar] = useState(false);

  return (
    <div className="flex items-center py-3 px-5 justify-between">
      <div className="flex items-center">
        <div>
          <button
          className="p-1 rounded border border-[#333333] text-[#333333] mr-2"
            onClick={() => {
              setopenNavbar(!openNavbar);
            }}
          >
            <FaBars />
          </button>
          {openNavbar && (
            <div className="text-[#333333] text-xl bg-white p-5 rounded-xl z-50 shadow-xl fixed justify-between">
              <p>Home</p>
              <p className="my-5">Courses</p>
              <p>Bootcamp</p>
            </div>
          )}
        </div>
        <p className="text-xl font-bold text-blue-500 italic">Sikho</p>
      </div>
      <div className="sm:flex hidden  items-center font-semibold text-[#333333] w-80 justify-between">
        <p>Home</p>
        <p>Courses</p>
        <p>Bootcamp</p>
      </div>

      <div>
        <button className="border border-[#333333] text-[#333333] px-4 py-1 rounded-full">
          login
        </button>
        <button className="bg-[#333333] ml-5 text-white px-4 py-1 rounded-full">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
