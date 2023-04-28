import React from "react";
import keeperImg from "../components/imgs/keeper-todo.jpg";
import FEM from "../components/imgs/FEM.jpg";
import Attribution from "./Attribution";
import YTclone from "../components/imgs/yt-demo-pic1.jpg";
function Projects() {
  return (
    <div
      className="relative  overflow-hidden  text-left 
    max-w-full justify-evenly mx-auto items-center z-0 border-b-2 border-dotted border-[#2c65ce] "
    >
      <h3 className="py-8 uppercase tracking-[20px] text-center text-gray-500 text-lg md:text-xl  lg:text-2xl">
        projects
      </h3>
      <div>
        {/**1 Youtube */}
        <div className="w-screen shadow-xl flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center h-auto  md:p-44 ">
          <img
            src={YTclone}
            alt=""
            className="w-[95%] md:w-[90%] mt-2 mb-3 lg:w-[65%]"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl lg:text-4xl font-semibold text-center">
              {" "}
              <span className="underline decoration-[#2c65ce]">
                projects 1 0f 3:
              </span>{" "}
              This is a Youtube clone built with React,tailwind,vite etc and
              this site is powered by the Rapid api.
            </h4>
            {/**attribution */}
            <Attribution
              site="https://youtube70.netlify.app"
              code="https://github.com/sulemaan7070/youtube-app-react"
              bool={true}
            />
            <p className=" text-lg md:text-xl lg:text-2xl text-center md:text-left">
              This is a todo app with functionality of storing the items in
              local storage along with with other functionalites.
            </p>
          </div>
        </div>
        {/**2 netflix */}
        <div className="w-screen shadow-xl flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center h-auto  md:p-44 ">
          <img
            src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
            alt=""
            className="w-[95%] md:w-[90%] mt-6 md:mt-12 lg:w-[55%]"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl lg:text-4xl font-semibold text-center">
              {" "}
              <span className="underline decoration-[#2c65ce]">
                projects 2 0f 3:
              </span>{" "}
              Netflix UI clone
            </h4>
            {/**attribution */}
            <Attribution
              site="https://netflix-clone70.netlify.app/"
              code="https://github.com/sulemaan7070/netflix-clone2"
              bool={true}
            />
            <p className=" text-sm md:text-xl lg:text-2xl text-center md:text-left">
              Netflix 2.0 app that has login and signup funtionality, with the
              firebase Authentication provided by the Google. This app displays
              data dynamically which is coming from the{" "}
              <span className="underline decoration-[#2c65ce]">TMDB</span>
            </p>
          </div>
        </div>

        {/**3 Front end mentor */}
        <div className="w-screen shadow-xl flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center h-auto  md:p-44 ">
          <img
            src={FEM}
            alt=""
            className="w-[85%] md:w-[90%] mt-12 lg:w-[40%]"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl lg:text-4xl font-semibold text-center">
              {" "}
              <span className="underline decoration-[#2c65ce]">
                projects 2 0f 3:
              </span>{" "}
              Front end mentor challenges
            </h4>
            {/**attribution */}
            <Attribution
              site="none"
              code="https://github.com/sulemaan7070/frontend-mentor-challanges"
              bool={false}
            />
            <p className=" text-lg md:text-xl mx-2 md:mx-0 lg:text-2xl text-center md:text-left">
              More than 10+ completed challenges or mini projects of the Front
              end mentor site... with a lot of new learnings and hands on
              experience
            </p>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#2c65ce]/20 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}

export default Projects;
