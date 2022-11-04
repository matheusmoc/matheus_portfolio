import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Matheus and i love coffe ☕",
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
        src="https://avatars.githubusercontent.com/u/73448357?s=400&u=d10689a047976a5b60acb2bff725719c1c22301b&v=4"
        alt=""
      />
      <div className="z-20">
        <h2 className="font-bold text-sm uppercase text-gray-500  pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#7858A6" cursorStyle="|" />
        </h1>

        <div className="pt-52">
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
