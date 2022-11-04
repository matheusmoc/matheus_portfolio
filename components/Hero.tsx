import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Matheus and i love coffe ☕",
      "How about we do something more modern for your business?",
      "<FollowMe❤️ />",
    ],
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 25,
    deleteSpeed: 10,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircle />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#6e00a5" cursorStyle="_" />
      </h1>
    </div>
  );
}
