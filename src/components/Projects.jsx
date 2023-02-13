import React from "react";
import { motion } from "framer-motion";
import keeperImg from "../components/imgs/keeper-todo.jpg";
import FEM from "../components/imgs/FEM.jpg";
import Attribution from "./Attribution";

function Projects() {
  return (
    <div
      className="relative min-h-screen flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden 
      snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#2c65ce]/80 scrollbar-thin"
      >
        {/**1 netflix */}
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <img
            src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
            alt=""
            className="w-[100%] mt-[6rem] lg:w-auto"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl lg:text-4xl font-semibold text-center">
              {" "}
              <span className="underline decoration-[#2c65ce]">
                projects 1 0f 3:
              </span>{" "}
              Netflix UI clone
            </h4>
            {/**attribution */}
            <Attribution
              site="https://not-netflix7070.netlify.app/"
              code="https://github.com/sulemaan7070/netflix-clone2"
              bool={true}
            />
            <p className=" text-sm md:text-base lg:text-xl text-center md:text-left">
              Netflix 2.0 app that has login and signup funtionality,with
              firebase Authentication from with Google . it has all the movies
              looking like the netflix.
            </p>
          </div>
        </div>
        {/**2 keeper */}
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <img
            src={keeperImg}
            alt=""
            className="w-[100%] mt-[6rem] lg:w-[60%]"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl lg:text-4xl font-semibold text-center">
              {" "}
              <span className="underline decoration-[#2c65ce]">
                projects 2 0f 3:
              </span>{" "}
              Todo App with local storage
            </h4>
            {/**attribution */}
            <Attribution
              site="https://keeper-clone-todos.netlify.app/"
              code="https://github.com/sulemaan7070/keeper-clone-Todo-app"
              bool={true}
            />
            <p className=" text-sm md:text-base lg:text-xl text-center md:text-left">
              This is a todo app with functionality of storing the items in
              local storage along with with other functionalites.
            </p>
          </div>
        </div>
        {/**3 Front end mentor */}
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <img
            src={FEM}
            alt=""
            className="w-[100%] md:w-[40%] mt-12 lg:w-[40%]"
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
            <p className=" text-sm md:text-base lg:text-xl text-center md:text-left">
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
