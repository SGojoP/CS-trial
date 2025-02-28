import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';

const links = [
  {
    title: "Himanchal",
    href: "/HimanchalPradesh",
    src: "himanchal.cms"
  },
  {
    title: "Gujarat",  
    href: "/Gujrat",
    src: "Gujrat.jpg"

  },
  {
    title: "Punjab",
    href: "/Punjab",
    src: "Punjab.webp"
  },

  {
    title: "Rajasthan",
    href: "/Rajasthan",
    src: "Rajasthan.jpg"
  },

  {
    title: "Pondicherry",
    href: "/Pondicherry",
    src: "pondicherry.jpg"
  },

  {
    title: "Chandigarh",
    href: "/Chandigarh",
    src: "Chandigarh.jpg"
  }
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          {/* <Footer /> */}
        </div>
        <Image src={links[selectedLink.index].src} selectedLink={selectedLink}/>
      </div>
    </motion.div>
  )
}