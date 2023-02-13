import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
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
    <>
      <div
        id="contact"
        className="md:h-[65vh] relative flex-col flex  text-left md:flex-row 
  max-w-7xl px-10 justify-evenly items-center"
      >
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>
        <form className="" ref={form} onSubmit={sendEmail}>
          <h3>Name</h3>
          <input type="text" name="user_name" />
          <h3>Email</h3>
          <input type="email" name="user_email" />
          <h3>Message</h3>
          <textarea name="message" />
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className="">
        <h1 className="text-center">map</h1>
        <MapContainer
          center={[14.754419824099354, 78.55434815620328]}
          zoom={8}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[14.754419824099354, 78.55434815620328]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};
