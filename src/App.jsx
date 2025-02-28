import './index.css';
import Home from './components/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HimanchalPradesh from './components/states/HimanchalPradesh';
import Punjab from './components/states/Punjab';
import Gujrat from './components/states/Gujrat';
import Chandigarh from './components/states/Chandigarh';
import Pondicherry from './components/states/Pondicherry';
import Rajasthan from './components/states/Rajasthan';
import Form from './components/Form/Contact-from';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (  
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path='/HimanchalPradesh' element={<HimanchalPradesh />} />
          <Route path='/Punjab' element={<Punjab />} />
          <Route path='/Gujrat' element={<Gujrat />} />
          <Route path='/Chandigarh' element={<Chandigarh />} />
          <Route path='/Pondicherry' element={<Pondicherry />} />
          <Route path='/Rajasthan' element={<Rajasthan />} />
          <Route path='/Form' element={<Form />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;


// import './index.css';
// import Home from './components/Home';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import HimanchalPradesh from './components/states/HimanchalPradesh';
// import Punjab from './components/states/Punjab';
// import Gujrat from './components/states/Gujrat';
// import Chandigarh from './components/states/Chandigarh';
// import Pondicherry from './components/states/Pondicherry';
// import Rajasthan from './components/states/Rajasthan';
// import Form from './components/Form/Contact-from';
// import { useEffect, useState } from 'react';

// function App() {
//   const location = useLocation();
  
//     useEffect(() => {
//       if ("scrollRestoration" in window.history) {
//         window.history.scrollRestoration = "manual";
//       }

//       const timer = setTimeout(() => {
//         window.scrollTo(0, 0);
//       }, 500);
  
//   console.log(`${location.pathname} scroll:`, scrollProgress[location.pathname]);
  
//   return (  
//     <>
//       <AnimatePresence mode='wait'>
//         <Routes location={location} key={location.pathname}>
//           <Route index element={<Home />} />
//           <Route path='/HimanchalPradesh' element={<HimanchalPradesh />} />
//           <Route path='/Punjab' element={<Punjab />} />
//           <Route path='/Gujrat' element={<Gujrat />} />
//           <Route path='/Chandigarh' element={<Chandigarh />} />
//           <Route path='/Pondicherry' element={<Pondicherry />} />
//           <Route path='/Rajasthan' element={<Rajasthan />} />
//           <Route path='/Form' element={<Form />} />
//         </Routes>
//       </AnimatePresence>
//     </>
//   );
// }

// export default App;