'use client'

import AuthNavbar from "@/component/Navbar/AuthNavbar";
import { PropsLayoutAuth } from "@/interface/AuthInterface";
import React from "react";
import { ThemeProvider } from "react-bootstrap";

export default function LayoutAuth(props: PropsLayoutAuth){
    return(
        <React.Fragment>
            <ThemeProvider
              breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
              minBreakpoint="xxs">
                <div className="content">
                    <AuthNavbar/>
                    { props?.children }
                </div>
            </ThemeProvider>
        </React.Fragment>
    )
}