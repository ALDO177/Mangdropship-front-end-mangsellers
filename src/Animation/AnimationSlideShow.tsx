import { motion } from 'framer-motion'
import React from 'react';
import { optionsAnimateSlideShow } from './Options';

type PropAnimateSlide = {
    children?: React.ReactNode,
    duration?: number
}

export default function AnimationSlide(props: PropAnimateSlide){
    return(
        <motion.div 
            transition={{duration: props?.duration ? props?.duration : 0.2}} 
            initial={'hidde'} 
            animate={"show"} 
            variants={optionsAnimateSlideShow}>
            { props.children }
        </motion.div>
    )
}