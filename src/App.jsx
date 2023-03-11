import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience,  Hero, Navbar, Tech, Works, StarsCanvas } from "./components";



const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary dark:text-gray-600 dark:bg-yellow-200 duration-100 rounded'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <StarsCanvas />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div/>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
