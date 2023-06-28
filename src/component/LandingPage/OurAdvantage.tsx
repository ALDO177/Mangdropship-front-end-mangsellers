import '@/assets/css/timeline.css'
import Image from 'next/image';
import { motion } from 'framer-motion'
import React from 'react';
import { ScroolAnimationOurAndvantage } from '@/Animation/Options';

type PropsPageAnimation = {
    children?: React.ReactNode;
}

const ScroolAnimations = (props: PropsPageAnimation) => {
    return (
        <motion.div
            initial={'offscreen'}
            whileInView={'onscreen'}
            variants={ScroolAnimationOurAndvantage}
            viewport={{once: false, amount: 0.9}}>
            { props?.children }
        </motion.div>
    )
}

const DataOurAdvantage = [
    {
        id: 1,
        path: 'https://trello-attachments.s3.amazonaws.com/5f7d30e7b971e11aae364474/5fbdbb175bf67267efd9bd14/f24badcb9dd3d140b596eedcfbcbc9eb/gratis.svg',
    },
    {
        id: 2,
        path: 'https://trello-attachments.s3.amazonaws.com/5f7d30e7b971e11aae364474/5fbdbb175bf67267efd9bd14/c0a46365f0b57ec6a8764e7ad8cff36a/pemasaran.svg',
    },
    {
        id: 3,
        path: 'https://trello-attachments.s3.amazonaws.com/5f7d30e7b971e11aae364474/5fbdbb175bf67267efd9bd14/5fee3c1f29ae128ebe76efa7623fdb77/dropshipper.svg',
    },
    {
        id: 4,
        path: 'https://trello-attachments.s3.amazonaws.com/5f7d30e7b971e11aae364474/5fbdbb175bf67267efd9bd14/204aa3f7b230356b3efc721fa6fa24e6/transaksi.svg',
    }
]

export default function OutAdventage() {
    return (
        <div className="timeline mt-5">
            {
                DataOurAdvantage.map((values, idx) => (
                    <div className={`container-tml ${idx % 2 === 0 ? "left" : "right"} `} key={idx}>
                        <ScroolAnimations>
                            <div className="content">
                                <div className='d-flex gap-3 mb-3'>
                                    <Image
                                        className='align-self-center'
                                        src={values?.path}
                                        alt='icons'
                                        width={120}
                                        height={120} />
                                    <div className='align-self-center'>
                                        <div className="title-content mb-3">Lorem ipsum dolor sit amet.</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quia!</p>
                                    </div>
                                </div>
                            </div>
                        </ScroolAnimations>
                    </div>
                ))
            }
        </div>
    )
}