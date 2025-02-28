import React from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { opacity } from '../../anim';
import { div } from 'framer-motion/client';


export default function Index({ src, selectedLink }) {
  return (
    <motion.div
        variants={opacity}
        initial="initial"
        animate={selectedLink.isActive ? "open" : "closed"}
        className={styles.imageContainer}>
      <img 
        src={`/images/${src}`} 
        alt="image" 
        className={styles.image} 
        loading="lazy"
      />
    </motion.div>
  );
}
