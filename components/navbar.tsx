import React from "react";
import { Fade } from "react-awesome-reveal";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="w-full py-4 flex items-center  px-4 lg:px-8">
      <div className="w-full lg:w-[15%]">
          <Fade triggerOnce cascade direction="up" duration={1500}>
        <span
          className="font-[monospace] tracking-wide text-[cyan] text-[30px] cursor-pointer hover:tracking-wider transition"
          onClick={() => window.location.reload()}
        >
          FAKE STORE{" "}
        </span>
          </Fade>
      </div>

      <div className="flex justify-end lg:w-[85%]">
        <div className="hidden lg:flex gap-24">
          <Fade triggerOnce cascade direction="left" duration={1000}>
            {[
              { link: "lorem1" },
              { link: "lorem2" },
              { link: "lorem3" },
              { link: "lorem4" },
            ]?.map((item, index) => (
              <a
                key={index}
                href={``}
                className={`text-sm lg:text-[16px] text-gray-400 hover:text-white hover:scale-105 transition`}
              >
                {item?.link}
              </a>
            ))}

            <div className="flex items-center gap-8">
              <MdOutlineShoppingCart className="h-6 w-6 cursor-pointer transition hover:scale-105" />
            </div>
          </Fade>
        </div>

        {/* sidebar */}
        <div className="lg:hidden">
          <RiMenu3Line className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
