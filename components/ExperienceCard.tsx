import React from "react";
import Laravel from "../public/laravel.svg";
import Bootstrap from "../public/bootstrap.svg";
import Jquery from "../public/jquery.svg";
import Wordpress from "../public/wordpress.svg";
import Html from "../public/html.svg";
import Css from "../public/css.svg";
import Javascript from "../public/javascript.svg";
import { motion } from "framer-motion";

type Props = {
  src: string;
};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-300 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={Laravel.src}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Laravel Developer</h4>
        <p className="font-bold text-2xl mt-1.5">
          University State of Montes Claros
        </p>

        <div className="flex space-x-2 my-2">
          <img className="h-14 w-14" src={Html.src} />
          <img className="h-14 w-14" src={Css.src} />
          <img className="h-14 w-14" src={Javascript.src} />
          <img className="h-14 w-14" src={Bootstrap.src} />
          <img className="h-14 w-14" src={Laravel.src} />
          <img className="h-14 w-14" src={Jquery.src} />
          <img className="h-14 w-14" src={Wordpress.src} />
        </div>

        <p className="uppercase py-5 text-gray-300">Start work in September 2021</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
