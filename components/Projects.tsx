import React from "react";
import code from "../public/code.png";

type Props = {
  src?: String;
};

export default function Projects({ src }: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((projec, index) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img src={code.src} alt="" />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#6e00a5]/60">
                    Case {index + 1} of {projects.length} :
                  </span>
                </h4>

                <p className="text-lg text-center md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam eu sapien eu nisl pretium condimentum. Aenean in ante
                  eu augue tempor porta at ut ex. Duis quis arcu elit.
                  Vestibulum viverra suscipit augue, sit amet feugiat ex
                  hendrerit vitae. Donec viverra congue lectus. Cras volutpat
                  nibh nisi, quis dapibus leo sodales quis. Mauris posuere
                  efficitur condimentum. Integer non fringilla nisi. Phasellus
                  hendrerit ante enim, nec elementum ex rhoncus id. Vestibulum
                  accumsan rutrum nisi, et placerat sem ultrices vitae.
                </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#6e00a5]/20 left-0 h-[350px] -skew-y-12" />
    </div>
  );
}
