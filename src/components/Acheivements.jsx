import { useEffect, useState } from "react";
import CountUp from "react-countup";
import badge from "../components/imgs/3rd-motw.svg";
import hackerRankImg from "../components/imgs/My project.png";

function Acheivements() {
  useEffect(() => {}, []);
  return (
    <div className="border-b-2 border-dotted border-[#2c65ce]">
      <h3 className="text-center my-3 lg:my-7 uppercase tracking-[10px] lg:tracking-[20px] text-gray-500 text-xl lg:text-2xl">
        Acheivements
      </h3>
      <section className="lg:flex lg:justify-around lg:items-center shadow-md lg:px-4 lg:py-4 my-3 lg:my-5  w-[50%] mx-auto text-[#2c65ce]  rounded-lg ">
        <div className="text-3xl font-medium">
          <h3>Mentored more than</h3>
          <span className="text-black">
            <CountUp
              start={0}
              end={150}
              duration={3}
              suffix="+"
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </span>
          <p>Front end developers</p>
        </div>
        <hr className="h-1 w-30  my-4 lg:w-24   bg-[#2c65ce]  lg:rotate-90 " />
        <div className="text-3xl font-medium">
          <h3>Hosted more than</h3>
          <span className="text-black">
            <CountUp
              start={0}
              end={10}
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </span>
          <p>sites on netlify</p>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row justify-center items-center ">
        <h4 className=" text-[#2c65ce] text-2xl lg:text-3xl">
          won mentor of the week bagde
        </h4>
        <img className="w-[24%] lg:w-[14%] " src={badge} alt="badge" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center ">
        <h4 className=" text-[#2c65ce] text-2xl lg:text-3xl">
          have 5 starts on hackerrank
        </h4>
        <img className="w-[24%] lg:w-[14%] " src={hackerRankImg} alt="badge" />
      </div>
    </div>
  );
}

export default Acheivements;
