import { Variants } from "framer-motion"

export const optionsAddtionalSlideShow = [
    ['top', {
        show:{
            opacity: 1,
            y: 1,
            scale: 1,
        },
        hidde:{
            opacity: 0,
            y: -80,
            scale: 0.7,
        }
    }],

    ['bottom', {
        show:{
            opacity: 1,
            y: 1,
            scale: 1,
        },
        hidde:{
            opacity: 0,
            y: 80,
            scale: 0.7,
        }
    }],

    ['left', {
        show:{
            opacity: 1,
            x: 1,
            scale: 1,
        },
        hidde:{
            opacity: 0,
            x: -80,
            scale: 0.7,
        }
    }],

    ['right', {
        show:{
            opacity: 1,
            x: 1,
            scale: 1,
        },
        hidde:{
            opacity: 0,
            x: 80,
            scale: 0.7,
        }
    }]
]


export const optionsAnimateSlideInShow = {
    show:{
        opacity: 1,
        y: 1,
        scale:1,
    },
    hidde:{
        opacity: 0,
        y: -50,
        scale: 0.8,
    }
}

export const optionsAnimateSlideShow = {
    show:{
        opacity: 1,
        scale: 1,
    },
    hidde:{
        opcacity: 0,
        scale: 0.5
    }
}

export const ScroolAnimation : Variants = {
    offscreen: {
        y: 100,
        opacity: 0
      },

    onscreen: {
        y: 1,
        opacity: 1,
        transition: {
            duration: 0.8
        }
    }
}

export const ScroolAnimationOurAndvantage : Variants ={
    offscreen:{
        x:100,
        opacity: 0,
        scale: 0.8
    },
    
    onscreen: {
        x: 1,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8
        }
    }
}