import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          <p>I have got just what you need.</p>
          <span className="decoration-[#6e00a5]/90 underline">
            Lets talk about your app?
          </span>
        </h4>

        <div className="space-x-10 items-baseline xl:flex space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#d47eff] h-7 w-7 animate-bounce" />
            <p className="text-2xl">+55 (38) 992709671</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#d47eff] h-7 w-7 animate-bounce" />
            <p className="text-2xl">matheusandrade009@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#d47eff] h-7 w-7 animate-bounce" />
            <p className="text-2xl">Montes Claros - MG, Brazil</p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input className="contactInput" type="text" />
            <input className="contactInput" type="text" />
          </div>

          <input className="contactInput" type="text" />
          

          <textarea className="contactInput"/>

          <button>Submit</button>

        </form>
      </div>
    </div>
  );
}
