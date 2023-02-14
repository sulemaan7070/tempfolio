import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { motion } from "framer-motion";
import locationImg from "./imgs/location.svg";
import ThankYou from "./ThankYou";

export const ContactUs = () => {
  const form = useRef();
  const [mail, setMail] = useState("");
  const [mailBool, setMailBool] = useState(true);
  const [name, setName] = useState("");
  const [nameBool, setNameBool] = useState(true);
  const [message, setMessage] = useState("");
  const [messageBool, setMessageBool] = useState(true);
  const [thank, setThank] = useState(true);
  const sendEmail = (e) => {
    e.preventDefault();

    if (!name) {
      setNameBool(false);
    } else {
      setNameBool(true);
    }
    if (
      !mail ||
      mail.split("").includes(" ") ||
      !mail.split("").includes("@")
    ) {
      setMailBool(false);
    } else {
      setMailBool(true);
    }
    if (!message) {
      setMessageBool(false);
    } else {
      setMessageBool(true);
    }

    if (
      message &&
      name &&
      mail &&
      !mail.split("").includes(" ") &&
      mail.split("").includes("@")
    ) {
      setThank(false);
      emailjs
        .sendForm(
          "service_7orehgl",
          "template_8tt2smng",
          form.current,
          "VFN3hMT6ChsgwZ7qQ"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section className="lg:flex">
      {/**contact forum */}
      {thank ? (
        <>
          <div
            id="contact"
            className="md:h-[65vh] w-[100%] lg:w-[50%] relative flex-col flex   text-left md:flex-col 
  max-w-7xl px-10 justify-center items-center mt-4 mb-14 lg:mb-0"
          >
            <h3 className=" uppercase tracking-[20px] text-gray-500 text-2xl">
              Contact
            </h3>
            <form className="" ref={form}>
              <h3>Name</h3>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="contactInput"
                type="text"
                name="user_name"
              />
              <p className={nameBool ? "invisible" : "text-rose-500 text-base"}>
                Please enter name
              </p>
              <h3>Email</h3>
              <input
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="contactInput"
                type="email"
                name="user_email"
              />
              <p className={mailBool ? "invisible" : "text-rose-500 text-base"}>
                Please enter a valid email
              </p>
              <h3>Message</h3>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="contactInput"
                name="message"
              />
              <p
                className={
                  messageBool ? "invisible" : "text-rose-500 text-base"
                }
              >
                Please enter some message
              </p>
              <br />

              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#2c65ce] cursor-pointer text-white md:py-5 md:px-10 py-2 px-4 rounded-md w-full font-bold text-lg"
                onClick={sendEmail}
              >
                send
              </motion.button>
            </form>
            <span className=" h-10 absolute -bottom-10 lg:-rotate-90 lg:-right-32 lg:bottom-44 z-20  flex justify-center items-center text-3xl lg:text-4xl">
              <img
                className="w-[3%] lg:w-[10%]"
                src={locationImg}
                alt="location"
              />{" "}
              where I live?
            </span>
          </div>
        </>
      ) : (
        <ThankYou />
      )}

      <div className=" ">
        <MapContainer
          center={[14.754419824099354, 78.55434815620328]}
          zoom={8}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[14.754419824099354, 78.55434815620328]}>
            <Popup>
              This is where I live <br /> Nice to meet you
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};
