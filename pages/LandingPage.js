import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";

function LandingPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="w-full">
        <div className="py-10 sm:py-20 w-full text-center px-5 sm:px-20">
          <p className="text-2xl sm:text-5xl text-[#333333]">
            Unlock Your Potential, One Course at a Time –
          </p>
          <p className="text-2xl sm:text-5xl text-blue-500 font-bold">
            Learn Smarter, Achieve Faster!
          </p>
          <div className="flex mt-5 justify-center">
            <p className="text-sm text-gray-400 sm:w-7/12">
              Discover a world of knowledge at your fingertips with SIKHO.
              Whether you're looking to advance your career, pick up a new
              skill, or simply explore your passions, our curated courses offer
              expert-led, flexible learning tailored to your goals.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-5 sm:p-10">
          <div className="justify-center mb-5 text-3xl font-bold flex items-center">
            <p className="text-[#333333]">Our best</p>
            <p className="ml-1.5 text-blue-500">Courses</p>
          </div>
          <Products />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
