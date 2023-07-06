/* eslint-disable @next/next/no-img-element */
{/* <img src={`/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Logo" height="20" className="mr-2" /> */}
import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            <img src={`/assets/animated-unscreen.gif`} alt="Logo" height="40" className="mr-2" />
            by
            <span className="font-medium ml-2">Mangdropship</span>
        </div>
    );
};

export default AppFooter;
