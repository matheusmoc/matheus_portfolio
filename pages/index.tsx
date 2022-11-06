import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

type Props = {
  image: string ;
};


const Home: NextPage<Props> = (image, images)  => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-mandatory snap-y overflow-scroll z-0'>
      <Head>
        <title>Matheus Portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience image={images}/>
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>
    </div>
  )
}

export default Home
