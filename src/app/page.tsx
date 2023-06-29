'use client'

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ScroolAnimationOurAndvantage } from '@/Animation/Options';
import { ComponentHeader, ComponentSection2 } from '@/component/Lazy/LoaderLazyComponent';
import { ScroolAnimationLandingPage } from '@/component/Arrays/ComponentArrays';
import { Metadata } from 'next';

export const metadata : Metadata = {
  title: 'Mangseller Center',
  description: 'Mangdropship Mangseller Company...',
  applicationName: 'Mangdropship'
}


type PropsPageAnimation  = { element: React.ReactNode };
type PropsPageHome = {
  children?: React.ReactNode
};

const PagesViewScrool = (props: PropsPageAnimation) =>{
  const ref    = React.useRef(null);
  const inView = useInView(ref, {once: true, amount: 0.8});

  return(
    <motion.section ref={ref} 
       className='section-pages' 
       initial={'offscrren'}
       animate={inView ? 'onscreen' : 'offscreen'} 
       variants={ScroolAnimationOurAndvantage}>
       {props?.element}
    </motion.section>
  )
}

export default function Home(props: PropsPageHome) {
  return (
    <React.Fragment>
      <ComponentHeader/>
      <ComponentSection2/>
      {
        ScroolAnimationLandingPage.map((values, idx) =>(
           <PagesViewScrool element={values.element} key={idx}/>
        ))
      }
    </React.Fragment>
  )
}

