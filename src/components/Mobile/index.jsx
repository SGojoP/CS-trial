'use client'
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Nav from './Mobilenav'

export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const location = useLocation();


  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [location])


  return (
    <>
    <div className={styles.main}>
      <div className={styles.header}>
        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      </div>
    </div>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}