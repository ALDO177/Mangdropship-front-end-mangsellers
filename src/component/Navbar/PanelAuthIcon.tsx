'use client'

import React from "react";
import ManAuthLogo from '@/assets/images/man.png';
import Image from "next/image";
import { useSession } from "next-auth/react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import * as IconsFa6 from 'react-icons/fa6';
import { motion } from "framer-motion";

export default function PanelAuthIcon() {

    const { status, data: session } = useSession();
    console.log(session)
    if (status === 'loading') return;
    if (status === 'unauthenticated') return <></>;
    const imageUser: string = session?.user?.image as string;

    return (
        <React.Fragment>
            {
                status === 'authenticated' &&
                <div className="align-self-center">
                    <OverlayTrigger
                        delay={{hide: 1000, show: 1000 }}
                        trigger={'click'}
                        key={'bottom'}
                        placement="bottom"
                        overlay={
                            <Popover style={{marginTop: '15px', width: '200px'}}>
                                <Popover id={`popover-positioned-bottom`} style={{fontSize: '15px'}}>
                                    <Popover.Header as="p" style={{fontSize: '15px'}} className="bg-light">
                                        <div className="d-flex gap-3">
                                            <IconsFa6.FaUnlockKeyhole 
                                             className="align-self-center text-color-dodgerblue" 
                                             size={16}/>
                                             <span className="align-self-center fw-bold text-black-50" style={{width: '120px'}}>{session?.user?.email}</span>
                                        </div>
                                    </Popover.Header>
                                    <Popover.Body style={{fontSize: '15px'}}>
                                        <div className="d-flex gap-3 mb-3 hop-pop">
                                            <IconsFa6.FaUserShield
                                             className="align-self-center text-color-dodgerblue" 
                                             size={18}/>
                                             <span className="align-self-center">{session?.user?.name}</span>
                                        </div>
                                        <div className="d-flex gap-3 mb-3 hop-pop">
                                            <IconsFa6.FaRightFromBracket
                                             className="align-self-center text-color-dodgerblue" 
                                             size={18}/>
                                             <span className="align-self-center">Logout</span>
                                        </div>
                                        <div className="d-flex gap-3 mb-3 hop-pop">
                                            <IconsFa6.FaRegSun
                                             className="align-self-center text-color-dodgerblue" 
                                             size={18}/>
                                             <span className="align-self-center">Setting</span>
                                        </div>
                                    </Popover.Body>
                                </Popover>
                            </Popover>
                        }>
                        <motion.div whileTap={{scale: 1.2}}>
                            <Image 
                                src={imageUser ? imageUser : ManAuthLogo} 
                                className="rounded-circle"
                                style={{cursor: 'pointer'}} 
                                alt="logo user auth" 
                                loading="eager" 
                                width={40} 
                                height={40}/>
                        </motion.div>
                    </OverlayTrigger>
                </div>
            }
        </React.Fragment>
    )
}