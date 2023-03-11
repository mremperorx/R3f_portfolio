import { Down, LightRoom, DarkRoom } from "../assets";

import { styles } from "../styles";
import { ComputersCanvas } from "./R3F";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-3 h-3 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} dark:text-gray-600 text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Majed</span>
          </h1>
          <p className={`${styles.heroSubText} dark:text-gray-600 mt-2 text-white-100`}>
            Front-End Developer ,  <br className='sm:block hidden' />
            web applications and 3D Visual
          </p>
        </div>
      </div>


      
    <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <img src={Down} alt="" srcset="" className="animate-bounce w-10 h-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
