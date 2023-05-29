import React from "react";
import { Down, Moon} from "../assets";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-10 top-[150px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-3 h-3 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
           <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl dark:text-gray-600"> hi, I'm <br className="block md:hidden" />
    <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform text-[#915EFF]"  >Majed 👋</span>
    <span
      className="box-border inline-block w-1 h-10 ml-2 mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
          </h1>
          <p className={`text-xl font-semibold md:text-3xl dark:text-gray-600 mt-2 text-white-100`}>
            Front-End Developer ,  <br className='sm:block hidden' />
            web applications and 3D Visual
          </p>
         
          <img className={styles.Img} src={Moon} />
          
        </div>
      </div>

        

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <img src={Down} alt="" srcset="" className="animate-bounce w-10 h-10 " />
        </a>
      </div>
    </section>
  );
};

export default Hero;
