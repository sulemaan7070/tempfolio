import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { signUpSchema } from "../schema";
import locationImg from "./imgs/location.svg";
const initialValues = {
  name: "",
  email: "",
  message: "",
};
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
  };

  return (
    <section className="lg:flex">
      <div
        id="contact"
        className="md:h-[65vh] w-[100%] lg:w-[50%] relative flex-col flex   text-left md:flex-col 
  max-w-7xl px-10 justify-center items-center mt-4 mb-14 lg:mb-0"
      >
        <h3 className=" uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>
        <form className="" ref={form} onSubmit={sendEmail}>
          <h3>Name</h3>
          <input className="contactInput" type="text" name="user_name" />
          <h3>Email</h3>
          <input className="contactInput" type="email" name="user_email" />
          <h3>Message</h3>
          <textarea className="contactInput" name="message" />
          <br />
          <motion.input
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#2c65ce] cursor-pointer text-white md:py-5 md:px-10 py-2 px-4 rounded-md w-full font-bold text-lg"
            type="submit"
            value="Send"
          />
        </form>
        <span className=" h-10 absolute -bottom-10 lg:-rotate-90 lg:-right-32 lg:bottom-44 z-20  flex justify-center items-center text-3xl lg:text-4xl">
          <img className="w-[3%] lg:w-[10%]" src={locationImg} alt="location" />{" "}
          where I live?
        </span>
      </div>

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
