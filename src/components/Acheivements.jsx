import CountUp from "react-countup";
import badge from "../components/imgs/3rd-motw.svg";
import hackerRankImg from "../components/imgs/My project.png";
function Acheivements() {
  return (
    <div id="style" className="border-b-2 border-dotted border-[#2c65ce]">
      <h3 className="text-center my-3 lg:my-7 uppercase tracking-[10px] lg:tracking-[20px] text-black py-4 text-xl lg:text-2xl">
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

      {/**bottom 2 sections */}
      <div className="lg:flex ">
        <div className="relative card flex lg:h-[250px] flex-col w-[80%] mx-auto my-4 lg:flex-row justify-center  items-center ">
          <h4 className=" text-[#2c65ce] text-2xl lg:text-3xl">
            won mentor of the week bagde
          </h4>
          <img
            className="w-[24%] lg:w-[25%] pb-4 lg:pb-0"
            src={badge}
            alt="badge"
          />

          <a
            className="absolute -bottom-0 lg:bottom-5 text-[#2c65ce] text-xl lg:text-2xl "
            href="https://www.frontendmentor.io/profile/sulemaan7070"
            target="_blank"
          >
            click here to see
          </a>
        </div>

        <div className=" relative card flex flex-col lg:h-[250px] w-[80%] mx-auto my-4 lg:flex-row justify-center items-center ">
          <h4 className=" text-[#2c65ce] text-2xl lg:text-3xl">
            have 5 starts on hackerrank
          </h4>
          <img
            className="w-[24%] lg:w-[24%] pb-4 lg:pb-0  "
            src={hackerRankImg}
            alt="badge"
          />
          <a
            className="absolute -bottom-0 lg:bottom-5 text-[#2c65ce] text-xl lg:text-2xl "
            href="https://www.hackerrank.com/sulemaan7070"
            target="_blank"
          >
            click here to see
          </a>
        </div>
      </div>
    </div>
  );
}

export default Acheivements;
