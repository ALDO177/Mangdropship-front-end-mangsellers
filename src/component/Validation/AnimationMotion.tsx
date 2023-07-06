'use client'
import React, { ReactNode } from "react";
import {motion} from 'framer-motion';

interface PropsValidationAnimation{
    children?: ReactNode,
    type: string,
    validation:string,
    error: any
}

const ValidationRequired = {
    show: {
        opacity: 1,
        y: 0,
    },
    hidde: {
        opacity: 0,
        y: 25,
    }
}

export function ValidationAnimation(props: PropsValidationAnimation){
    return (
        <React.Fragment>
           {
                props.error[props.type]?.type === props?.validation && (
                    <motion.div transition={{duration: 0.5}} variants={ ValidationRequired }  initial={'hidde'} 
                     animate={ props?.error[props.type]?.type === props?.validation ? 'show' : 'hidde'}>
                        { props?.children }
                    </motion.div>
                )
           }
        </React.Fragment>
    )
}