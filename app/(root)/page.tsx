"use client";

import Navbar from "@/components/navbar";
import { Fade } from "react-awesome-reveal";
import { MdInfoOutline } from "react-icons/md";

export default function Home() {
  return (
    <div className="bg-[url('/img3.jpg')] bg-cover bg-no-repeat h-full lg:h-screen w-full">
      <div className="bg-[#000] text-white bg-opacity-80 h-full w-full pb-20">
        <Navbar />

        <div className="flex flex-col-reverse lg:flex-row gap-8 w-full px-4 lg:px-28 mt-8 lg:mt-20">
          <div className="flex flex-col lg:w-1/2">
            <Fade
              triggerOnce
              cascade
              direction="up"
              duration={1000}
              className="w-full"
            >
              <span className="text-[30px] lg:text-[50px] font-[monospace] lowercase text-justify">
                {" "}
                Lorem ipsum dolor amet
              </span>
              <span className="text-[24px] flex items-center gap-2 leading-tight text-[#a5a5a5] lowercase mb-8 text-justify">
                <MdInfoOutline />
                Lorem ipsum dolor
              </span>

              <span className="text-sm lg:text-lg text-justify tracking-wider leading-loose text-[#a5a5a5] mb-4">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt illo aliquam praesentium dicta, neque ipsa expedita
                nam! Hic delectus laudantium minima labore at dolorem tempora,
                impedit laboriosam recusandae sint eveniet amet saepe explicabo
                error? Quis incidunt expedita facilis animi sint debitis maxime
                molestias voluptatibus a amet laborum beatae, ullam quod magni
                laboriosam libero aliquid? Necessitatibus corrupti fuga officia
                porro, voluptatum dignissimos sapiente laboriosam aspernatur,
                quo dolore est praesentium eaque architecto!
              </span>

              <div className="flex items-center w-full gap-8 mt-12">
                <Fade
                  triggerOnce
                  cascade
                  direction="left"
                  delay={1000}
                  duration={1500}
                  className="w-full"
                >
                  {[{}, {}]?.map((item, index) => (
                    <div
                      key={index}
                      className={`border ${
                        index === 0
                          ? "border-[cyan]"
                          : "border-white bg-[#ffffff61]"
                      } hover:border-white text-[#a5a5a5] transition hover:text-white hover:transition flex justify-center hover:scale-105 py-4 w-full rounded-md cursor-pointer`}
                    >
                      Lorem
                    </div>
                  ))}
                </Fade>
              </div>
            </Fade>
          </div>

          <div className="lg:w-1/2">
            <Fade triggerOnce duration={2000}>
              <img
                src="/img5.png"
                alt=""
                className="w-full object-contain scale-75 lg:scale-100 -rotate-45"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
