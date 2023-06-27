import { motion } from 'framer-motion'
import React from 'react';

const options = {
    show:{
        opacity: 1,
        scale: 1,
    },
    hidde:{
        opcacity: 0,
        scale: 0.5
    }
}

type PropAnimateSlide = {
    children?: React.ReactNode
}

export default function AnimationSlide(props: PropAnimateSlide){
    return(
        <motion.div 
         transition={{duration: 0.4}} 
         initial={'hidde'} 
         animate={"show"} 
         variants={options}>
            {props.children}
        </motion.div>
    )
}