import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { options } from "../constants";
import { MyCV, menu, close } from "../assets";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "system");
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function onWindowMatch() {
    if(localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)
    ){
      element.classList.add("dark");
    }else {
      element.classList.remove("dark");
    }
  }

  useEffect(() => {
    switch(theme) {
      case "light":
      element.classList.add("dark");
      localStorage.setItem("theme", "light");
      break;
      case "dark":
        element.classList.remove("dark");
        localStorage.setItem("theme", "dark");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);
  
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full  flex items-center py-5 fixed top-0 z-20 dark:bg-yellow-300 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
     
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[20px] font-bold cursor-pointer flex dark:text-black'>
            Majed &nbsp;
            <span className='sm:block'> El-Naser</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <a href={MyCV} download="MyCv.pdf" target="_blank" rel="noreferrer">
           <button className="transition ease-in-out delay-150 bg-blue-500  px-5 rounded inline-flex items-center hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
           <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>CV</span>
                </button>
                </a>
        </ul>
       

        <div className="list-none hidden sm:flex right-10  flex-row duration-100"
       onClick={() => setToggle(!toggle)}>
      {
        options?.map(opt => (
      <button 
      onClick={() => setTheme(opt.text)}
      key={opt.text} 
      className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && "text-sky-600" }`}> 
     <ion-icon name={opt.icon}></ion-icon>
       </button>
        ))
      }  
      </div>

        <div className='sm:hidden  justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-2'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <div className="list-none flex justify-end items-start"
       onClick={() => setToggle(!toggle)}>
      {
        options?.map(opt => (
      <button 
      onClick={() => setTheme(opt.text)}
      key={opt.text} 
      className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && "text-sky-600" }`}> 
     <ion-icon name={opt.icon}></ion-icon>
       </button>
        ))
      }  
      </div>
      <div className="list-none flex inset-x-0 bottom-0"
       onClick={() => setToggle(!toggle)}> 
         <a href={MyCV} download="MyCv.pdf" target="_blank" rel="noreferrer">
           <button className="transition ease-in-out delay-150 bg-blue-500  px-5 rounded inline-flex items-center hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
           <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>CV</span>
                </button>
                </a>
        </div>
     </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
