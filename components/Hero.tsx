import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

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
        src="https://scontent.fmoc7-1.fna.fbcdn.net/v/t39.30808-6/312457503_1711483075905550_191835023645024432_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEYl7JbnHbEGYJcaCa7hRQ2grhBytkezTeCuEHK2R7NNw1JIaKxoq5rLmxWt6PcsC2k_zVzxNcPlvDgL8k0SHxf&_nc_ohc=fOLYBaxCLCwAX_40XBf&_nc_ht=scontent.fmoc7-1.fna&oh=00_AfAuRpITm5tNF9fBRxKEoF8KFGG4AWYLB88-UAsRhSETrA&oe=636AB1DF"
        alt=""
      />
      <div className="z-20">
        <h2 className="font-bold text-sm uppercase text-gray-500  pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#7858A6" cursorStyle="|" />
        </h1>

        <div className="pt-52 divide-gray-500 divide-x">
          <Link className="pl-1 pr-1" href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link className="pl-1 pr-1" href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link className="pl-1 pr-1" href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link className="pl-1 pr-1" href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
