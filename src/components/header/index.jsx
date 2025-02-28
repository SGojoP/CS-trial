import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './style.module.scss';
import { opacity, background } from './anim';
import Nav from './nav';

export default function index() {
    const [isActive, setIsActive] = useState(false);    

    return (
        <div className={styles.header}>
            <div className={styles.bar}>
                <NavLink to="/">Enrollix</NavLink>
                {/* <div onClick={() => setIsActive(!isActive)} className={styles.el}> */}
                <button aria-label="Toggle Menu" onClick={() => setIsActive((prev) => !prev)} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                        <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                    </div>
                </button>
                <motion.div variants={opacity} animate={!isActive ? "open" : "closed"} className={styles.shopContainer}>
                    Home
                </motion.div>
            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className={styles.background}></motion.div>
            <AnimatePresence mode='wait'>
                {isActive && <Nav />}
            </AnimatePresence>
        </div>
    );
}