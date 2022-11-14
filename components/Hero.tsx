import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import profile from "../public/profile.jpg"
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo
};

export default function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, my name is ${pageInfo?.name} ☕`,
      "How about innovating your business?",
      "<FollowMe 😉 />",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 60,
    deleteSpeed: 20,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      />
      <div className="z-20">
        <h2 className="flex justify-center font-bold text-sm uppercase text-gray-500 pb-1 tracking-[10px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-3xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#7858A6" cursorStyle="|" />
        </h1>

        <div className="flex justify-center xl:pt-52 pt-28">
          <Link href="#about">
            <button className="heroButton pr-4 pl-4">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton pr-4 pl-4">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton pr-4 pl-4">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton pr-4 pl-4">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
