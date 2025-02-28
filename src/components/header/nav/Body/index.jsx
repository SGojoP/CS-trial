import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import { blur, translate } from '../../anim';
import { useState, useEffect } from 'react';

export default function Body({links, selectedLink, setSelectedLink}) {
    const [blurDissable, setBlurDissable] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setBlurDissable(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    const getChars = (word) => {
        let chars = [];
        word.split("").forEach((char, i) => {
          chars.push(
            <motion.span 
                custom={[i * 0.02, (word.length - i) * 0.01]} 
                variants={translate} initial="initial" 
                animate="enter" 
                exit="exit" 
                key={char + i}>
                {char}
            </motion.span>
          )
        })
        return chars;
    }
    
    return (
        <div className={styles.body}>
        {
            links.map((link, index) => {
                const { title, href } = link;
                return (
                    <Link key={`l_${index}`} to={href}>
                        <motion.p 
                            onMouseOver={() => { if(!blurDissable) setSelectedLink({isActive: true, index})}} 
                            onMouseLeave={() => { if(!blurDissable) setSelectedLink({isActive: false, index})}} 
                            variants={blur} 

                    animate={!blurDissable && selectedLink.isActive && selectedLink.index !== index ? "open" : "closed"}>
                            {getChars(title)}
                        </motion.p>
                    </Link>
                )
            })
        }

        </div>
    )
}
