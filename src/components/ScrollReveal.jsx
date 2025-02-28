// 'use client'
import '../index.css';
import React, { useRef, useEffect } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { span } from 'framer-motion/client';


export default function word({value}) {

    const element = useRef(null);

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.34']
    })

    const words = value.split(" ");

    return (
        <p
        className='text-[50px] font-bold text-center pl-10 pr-10 paragraph'
        ref={element} 
        >
            {words.map((word, i) => {
                const start = i/words.length;
                const end = start + (1/words.length);
                return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
            })}
        </p>
    )
}


const Word = ({children, range, progress}) => {
    const character = children.split("");
    const amount = range[1] - range[0];
    const step = amount / character.length;
    return (
        <span className='word'>
            {
                character.map((character, i) => {
                    const start = range[0] + (step * i);
                    const end = range[0] + (step*(i+1));
                    return <Character key={i} range={[start, end]} progress={progress}>{character}</Character>
                })
            }
        </span>
    )
}

const Character = ({children, range, progress}) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span>
            <span className='shadow-word'>{children}</span>
            <motion.span style={{opacity}}>
                {children}
            </motion.span>
        </span>
    )
}

