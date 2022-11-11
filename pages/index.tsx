import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { ChevronUpIcon } from "@heroicons/react/24/solid"



type Props = {};

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-mandatory snap-y overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#6e00a5]/80"
    >
      <Head>
        <title>Matheus Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
      
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer xl:py-2 py-5">
          <div className="flex items-center justify-center">
            <ChevronUpIcon className="bg-purple-700 text-black h-12 w-12 p-2 rounded-full filter hover:bg-purple-900 cursor-pointer animate-bounce" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
