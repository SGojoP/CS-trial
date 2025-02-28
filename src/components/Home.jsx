import { useEffect, useState } from 'react';
import { Howl } from 'howler';
import hoveer from '../assets/sound/hover2.mp3';
import click from '../assets/sound/click1.mp3';
import Page from './page';
import Lenis from 'lenis';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { SmoothScrollHero } from './scroll';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import Transition from './transition';


const Home = () => {
  const [visible , setVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);



  const hoverSound = new Howl({
    src: [hoveer],
    volume: 1,
    preload: true,
  });

  const clickSound = new Howl({
    src: [click],
    volume: 0.5,
    preload: true,
  });

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smooth: true,
      smoothMobile: true,
    });
  }, []);
  

  useEffect(() => {    
    hoverSound.mute(true);

    hoverSound.play();
    hoverSound.once('end', () => {
      hoverSound.stop(); // Stop it after preload
      hoverSound.mute(false); // Unmute the audio
    });
  }, [hoverSound]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    clickSound.play();
  };

  const {scrollY} = useScroll();

  const fastscroll = useTransform(scrollY, [0, 800], [0, -800]);
  const slowscroll = useTransform(scrollY, [0, 1000], [0, -200]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 360], { clamp: false });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious();
    if(latest > prev && latest > 100){
      setVisible(false);
    }
    else{
      setVisible(true);
    }
  }); 

  return (
    <div className='w-full min-h-screen overflow-hidden'>
        <motion.div
            variants={
              {
                visible: {
                  y: 0,
                },
                hidden: {
                  y: '-100%',
                },
              }
            }
            animate = {visible ? 'visible' : 'hidden'}
            id="header" 
            className={
            `w-full 
            fixed 
            top-0 
            transition-transform 
            duration-700 
            ease-in-out 
            ${isDarkMode ? 'bg-black' : 'bg-white'} ${visible ? 'translate-y-0' : '-translate-y-full'} 
            z-50`
            }>
              <div id='header-container' className={`flex justify-between items-center w-[98%] h-[8vh] mx-auto border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div id='header-name' className={`font-bold text-2xl tracking-wider ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Enrollix
                </div>
                <div onMouseEnter={() => hoverSound.play()}>
                  <button 
                    onClick={toggleTheme}
                    className={`w-[5em] h-[2.3rem] flex items-center justify-between bg-transparent rounded-full p-1 ${isDarkMode ? 'border-[1px] border-gray-700 hover:border-gray-400' : 'bg-white border-[1px] border-gray-200 hover:border-gray-400'} relative transition-colors duration-300`}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 z-10 ml-[10.2px] ${isDarkMode ? 'text-white' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          
                    </svg>
                    <div className={`w-[2.5rem] h-[2rem] rounded-full absolute ${isDarkMode ? 'bg-white translate-x-[2rem]' : 'bg-black translate-x-[-0.1rem]'} transform transition-transform duration-[0.3s]`}></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 z-10 mr-[9.5px] text-black`} fill='black' viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          
                    </svg>
                  </button>
                </div>
                <div id='header-links' className='hidden md:flex gap-10'>
                  <Link className={`${isDarkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'} transition-colors duration-300 text-sm uppercase tracking-wider`} 

                  onMouseEnter={() => hoverSound.play()} onClick={() => clickSound.play()}>What we do</Link>
                  <Link className={`${isDarkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'} transition-colors duration-300 text-sm uppercase tracking-wider`}
                  onMouseEnter={() => hoverSound.play()} onClick={() => clickSound.play()}>Who we are</Link>
                  <Link  className={`${isDarkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'} transition-colors duration-300 text-sm uppercase tracking-wider`}
                  onMouseEnter={() => hoverSound.play()} onClick={() => clickSound.play()}>How we give back</Link>
                  <Link to='/Form' target='_parent' className={`${isDarkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'} transition-colors duration-300 text-sm uppercase tracking-wider`}
                  onMouseEnter={() => hoverSound.play()} onClick={() => clickSound.play()}>Talk to us</Link>

                </div>
          
              </div>
            </motion.div>
          
            {/* Hero Section */}
          <div className={`w-full relative min-h-screen border-b-[0.2px] ${isDarkMode ? 'bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-950 to-obsedian-900 text-white border-gray-700' : 'bg-white text-black border-gray-200'}`}>

          
            {/* Absolute Images */}

            {/* <motion.div style={{y: slowscroll}} className='absolute top-[2.5rem] left-0 w-[20em] h-[20em] rotate-[-10deg]'>
              <img src="/images/clock.png" className='w-full object-cover ' alt="" />
            </motion.div>
            
            
            <motion.div style={{y: slowscroll}} className='absolute top-[2.5rem] right-0 w-[20em] h-[20em] rotate-[10deg]'>
              <img src="/images/stickyNote.png" className='w-full object-cover ' alt="" />
            </motion.div> */}

            <motion.div style={{y: fastscroll}} className='absolute bottom-[2.5rem] right-[15rem] w-[20em] h-[20em]'>
              <img src="/images/education.png" className='w-full object-cover z-20' alt="" />
            </motion.div>
            
            <motion.div style={{y: slowscroll}} className='absolute bottom-[-2.5rem] left-[20rem] w-[20em] h-[20em]'>
              <img src="/images/student.png" className='w-full object-cover ' alt="" />
            </motion.div>
            
            {/* Hero Text */}
            <div className='w-full min-h-screen flex justify-center items-center'>
              <div className='mx-auto text-center'>
                <h1 className={`text-[90px] leading-[90px] ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Empower Your Medical<br/>
                  Journey
                </h1>
                <h2 className={`pt-10 text-[20px] ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  welcome to Enrollix 
                  <br />
                  <span className='opacity-50'>
                    (Place where your dream come true)
                  </span>
                </h2>
                <div className='pt-4'>
                  <Link to='/Form' className={`px-8 py-4 border-2 text-[20px] ${isDarkMode ? 'border-gray-700 text-white' : 'border-gray-300 text-black'}`} onClick={() => clickSound.play()}>Get Started</Link>
                </div>
              </div>
            
            </div>
          </div>
            
          <div className={`w-full min-h-screen border-b-[0.2px] flex justify-center items-center ${isDarkMode ? 'bg-gradient-to-b from-obsedian-900 to-black bg-black text-white' : 'bg-white text-black'} z-10`}>
            <Page className='z-10'/>
          </div>
          <div className={`w-full min-h-screen relative flex justify-center flex-col items-center border-b-[0.2px] p-4 ${isDarkMode ? 'bg-black text-white border-gray-700' : 'bg-white text-black border-gray-200'}`}>
            
              {/* Service Brief */}

              <div className='absolute top-10 left-10'>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="90"
                  height="90"
                  className="text-gray-700"
                  style={{rotate}}
            
                >
                  <path style={{rotate}}
                    d="M 0 24.333 L 18.689 24.333 C 20 24.356 21.222 24.911 22.111 25.867 L 22.133 25.889 C 23.089 26.778 23.644 28.022 23.667 29.311 L 23.667 48 L 24.333 48 L 24.333 29.311 C 24.356 28 24.911 26.778 25.867 25.889 L 25.889 25.867 C 26.778 24.911 28.022 24.356 29.311 24.333 L 48 24.333 L 48 23.667 L 29.311 23.667 C 28 23.644 26.778 23.089 25.889 22.133 L 25.867 22.111 C 24.911 21.222 24.356 19.978 24.333 18.689 L 24.333 0 L 23.667 0 L 23.667 18.689 C 23.644 20 23.089 21.222 22.133 22.111 L 22.111 22.133 C 21.222 23.089 19.978 23.644 18.689 23.667 L 0 23.667 Z M 24 22 C 25.111 22 26 22.889 26 24 C 26 25.111 25.111 26 24 26 C 22.889 26 22 25.111 22 24 C 22 22.889 22.889 22 24 22 Z"
                    fill="currentColor"
                  />
                </motion.svg>
              </div>
            <div className='w-[95%] flex justify-center gap-[30%] border-[0.2px]'>
              <div className='border-[0.2px]'>
                <p className='about tracking-[0.01px] opacity-70 '>
                  <span className='trial'>
                    <span className=' opacity-50 '>(Our Services)</span><span className=' text-[88px] '>We help students</span><br />
                  </span>
                <span className='text-[88px]'>navigate the (competitive)</span><br />
                <span className=' text-[88px] '>and (complex) process of</span> <br />
                <span className=' text-[88px] '>securing medical college</span> <br />
                <span className=' text-[88px] '>seat.</span>
                </p>
              </div>
            </div>
              <div className='absolute top-10 right-10'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="90"
                  height="90"
                  className="text-gray-700"
                >
                  <path
                    d="M 0 24.333 L 18.689 24.333 C 20 24.356 21.222 24.911 22.111 25.867 L 22.133 25.889 C 23.089 26.778 23.644 28.022 23.667 29.311 L 23.667 48 L 24.333 48 L 24.333 29.311 C 24.356 28 24.911 26.778 25.867 25.889 L 25.889 25.867 C 26.778 24.911 28.022 24.356 29.311 24.333 L 48 24.333 L 48 23.667 L 29.311 23.667 C 28 23.644 26.778 23.089 25.889 22.133 L 25.867 22.111 C 24.911 21.222 24.356 19.978 24.333 18.689 L 24.333 0 L 23.667 0 L 23.667 18.689 C 23.644 20 23.089 21.222 22.133 22.111 L 22.111 22.133 C 21.222 23.089 19.978 23.644 18.689 23.667 L 0 23.667 Z M 24 22 C 25.111 22 26 22.889 26 24 C 26 25.111 25.111 26 24 26 C 22.889 26 22 25.111 22 24 C 22 22.889 22.889 22 24 22 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>


              {/* Details about the services */}
              <div className=' border-[2px] w-[75%] lg:text-[88px] md:text-[44px] sm:text-[22px]'>
                <p className='about mt-20 flex flex-col gap-10'>
                  <span className='flex flex-col gap-2'>
                    <p className='flex gap-10 border-b-[0.2px]'><span className='number'>01</span><span className='opacity-70'>Guaranteed Selection</span> </p>
                    <span className='ml-10 flex items-center gap-20'>
                      <div className='lg:w-5 lg:h-5 md:w-2 md:h-2 rounded-full bg-gray-700'></div>
                      <div className='w-full flex items-center justify-between'>
                        <div className='flex'>
                          <div className='border-[0.2px] border-gray-700 rounded-[20px] text-[10px] p-2'>Strategic Preparation</div>
                          <div className='border-[0.2px] border-gray-700 rounded-[20px] text-[10px] p-2'>Merit Support</div>
                          <div className='border-[0.2px] border-gray-700 rounded-[20px] text-[10px] p-2'>Seat Assurance Program</div>
                        </div>
                        <div className='lg:w-5 lg:h-5 md:w-2 md:h-2 rounded-full bg-gray-700'></div>
                      </div>
                    </span>
            
                  </span>
                  <span className='flex flex-col gap-2'>
                    <p className='flex gap-10 border-b-[0.2px]'><span className='number'>02</span><span className='opacity-70'>Expert Counselling</span></p>
                    <span className='ml-10 flex items-center gap-20'>
                      <div className='lg:w-5 lg:h-5 md:w-2 md:h-2 rounded-full bg-gray-700'></div>
                      <div className='w-full flex items-center justify-between'>
                        <div className='flex'>
                          <div className='border-[0.2px] border-gray-700 rounded-[20px] text-[12px] p-2'>Tailored Admission Plans</div>
                          <div className='border-[0.2px] border-gray-700 rounded-[20px] text-[12px] p-2'>Insights From Exports</div>
                        </div>
                        <div className='lg:w-5 lg:h-5 md:w-2 md:h-2 rounded-full bg-gray-700'></div>
                      </div>
                    </span>
                  </span>
            
            
                  <span className='flex flex-col gap-2'>
                    <p className='flex gap-10 border-b-[0.2px]'><span className='number'>03</span><span className='opacity-70'>Path to the best College</span></p>
                    <span className='ml-10 flex items-center gap-20'>
                      <div className='lg:w-5 lg:h-5 md:w-2 md:h-2 rounded-full bg-gray-700'></div>
                      <div className=' w-full flex items-center justify-between'>  
                        <div className='flex'>
                          <div className='border-[0.2px] border-gray-700 rounded-[20px] text-[12px] p-2'>Data-Driven Choices</div>
                          <div className='border-[0.2px] border-gray-700 rounded-[20px] text-[12px] p-2'>Find Your Best Match</div>
                        </div>
                        <div className='lg:w-5 lg:h-5 md:w-2 md:h-2 rounded-full bg-gray-700'></div>
                      </div>
                    </span>
                  </span>
            
                  <span className='flex flex-col gap-2'>
                    <p className='flex gap-10 border-b-[0.2px]'><span className='number'>04</span><span className='opacity-70'>Personalized Guidance</span></p>
                    <span className='ml-10 flex items-center gap-20'>
                      <div className='lg:w-5 lg:h-5 md:w-2 md:h-2 rounded-full bg-gray-700'></div>
                      <div className='w-full flex items-center justify-between'>
                        <div className='flex'>
                          <div className='border-[0.2px] border-gray-700 rounded-[20px] text-[12px] p-2'>Personalized Rodmap</div>
                          <div className='border-[0.2px] border-gray-700 rounded-[20px] text-[12px] p-2'>One-On-One Admission Assistance</div>
                        </div>
                      <div className='lg:w-5 lg:h-5 md:w-2 md:h-2 rounded-full bg-gray-700'></div>
                      </div>
                    </span>
            
            
                  </span>
                  <span className='flex flex-col gap-2'>
                    <p className='flex gap-10 border-b-[0.2px]'><span className='number'>05</span><span className='opacity-70'>Post Admission Support</span></p>
                    <span className='ml-10 flex items-center gap-20'>
                      <div className='lg:w-5 lg:h-5 md:w-2 md:h-2 rounded-full bg-gray-700'></div>
                      <div className='w-full flex items-center justify-between'>  
                        <div className='flex'>
                          <div className='border-[0.2px] border-gray-700 rounded-[20px] text-[12px] p-2'>Support Beyond Admission</div>
                          <div className='border-[0.2px] border-gray-700 rounded-[20px] text-[12px] p-2'>Seamless College Transition</div>
                        </div>
                      <div className='lg:w-5 lg:h-5 md:w-2 md:h-2 rounded-full bg-gray-700'></div>
                      </div>
                    </span>
                  </span>
                </p>
            
              </div>
            <div></div>
          </div>
            
          <div className={`w-full min-h-screen z-10 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <SmoothScrollHero />
          </div>
            
          {/* Map of India */}
            
          <div className={`w-full min-h-screen flex flex-col md:flex-row items-center ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className='w-full md:w-[50%] h-full flex justify-center md:block'>
              <img src='/images/India-Map.png' className='w-[90%] md:w-full object-cover' alt='India Map' />
            </div>
          </div>
        <div>
            <Link to='/Gujrat'> click me </Link>
        </div>
          <Footer />
    </div>
  );
}

const HomeWithTransition = Transition(Home); 
export default HomeWithTransition;

