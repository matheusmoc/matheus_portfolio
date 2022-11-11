import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import profile from "../public/profile.jpg"

type Props = {
  src?:string
};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Matheus ☕",
      "Want something modern for your business?",
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
        src={profile.src}
        alt=""
      />
      <div className="z-20">
        <h2 className="flex justify-center font-bold text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#7858A6" cursorStyle="|" />
        </h1>

        <div className="flex justify-center xl:pt-52 pt-24">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
