import React from "react"
import { motion } from 'framer-motion';
import { optionsAnimateSlideInShow, optionsAddtionalSlideShow } from "./Options";

type PropsComponent = {
    children?: React.ReactNode,
    duration?: number,
    type?: "top" | "bottom" | "right" | "left"
}

export default function AnimationSlideInShow(props: PropsComponent){

    const optionsAnimate = optionsAddtionalSlideShow.find(([key, values], idx) => key === props?.type);
    const [key, values] : any = optionsAnimate ? optionsAnimate : optionsAddtionalSlideShow.find(([key, values], idx) => key === 'top')

    return(
       <motion.div
            transition={{duration: props.duration ? props?.duration : 0.1}}
            initial={'hidde'}
            animate={'show'}
            variants={values}>
            {props?.children}
       </motion.div>
    )
}