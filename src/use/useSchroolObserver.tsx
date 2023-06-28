
import React from 'react';
type PropsComponent = {
    element: string
}

export const useSchroolObserver = (props: PropsComponent) =>{
    React.useEffect(() =>{
        const callbackIntersaection = (entires: any) =>{
            entires.forEach((entry: any) =>{
              if (entry.isIntersecting) {
                let elem = entry.target;
                if (entry.intersectionRatio >= 0.75) {
                  console.log(elem)
                }
              }
            })
         }
         const pagesElement = document.querySelectorAll(props?.element);
         const Observers = new IntersectionObserver(callbackIntersaection, {
          rootMargin: '0px',
          threshold: 0.8
         });
    
         pagesElement.forEach((values) =>{
            Observers.observe(values)
         });
    }, [])
}