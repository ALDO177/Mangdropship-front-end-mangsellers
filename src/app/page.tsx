
'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import { Cookies } from 'react-cookie';
import { motion, useInView } from 'framer-motion';
import { ScroolAnimation } from '@/Animation/Options';

interface Props { cookies?: Cookies }
type PropsPageAnimation = { element: React.ReactNode };

const ComponentHeader   = dynamic(() => import('@/component/LandingPage/ComponentSection1'));
const ComponentSection2 = dynamic(() => import('@/component/LandingPage/ComponentSection2'));

const PagesAnimationSlide = (props: PropsPageAnimation) => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={'onscreen'}
      variants={ ScroolAnimation }
      viewport={{ once: true, amount: 0.7 }}>
      { props?.element }
    </motion.div>
  )
}

const PagesViewScrool = (props: PropsPageAnimation) =>{
  const ref    = React.useRef(null);
  const inView = useInView(ref, {once: true, amount: 0.7});

  return(
    <section ref={ref}>
      
    </section>
  )
}

export default function Home(props: Props) {
  return (
    <React.Fragment>
      <ComponentHeader/>
      <ComponentSection2/>
       {/* {
          RegisterPages.map((values, idx) =>(
            <PagesAnimationSlide element={ values?.element } key={idx}/>
          ))
       } */}
    </React.Fragment>
  )
}
