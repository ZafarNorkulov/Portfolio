import { motion } from 'framer-motion';
import { styles } from '../styles';
import {  bwmap, worldmap } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full md:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full md:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex md:flex-row flex-col w-full h-screen mx-auto 
        md:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] md:hidden" />
            <div className="w-1 md:h-80 h-40 bw-gradient md:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I&apos;m{' '}
              <span
                className="md:text-battleGray md:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
               Zafar Norkulov
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
            <span className='whitespace-nowrap'>I&apos;m a Frontend Developer.</span> <br className="md:block hidden" />
             Welcome to my portfolio site!
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center md:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
         
        </div>
      </section>
    </>
  );
};

export default Hero;
