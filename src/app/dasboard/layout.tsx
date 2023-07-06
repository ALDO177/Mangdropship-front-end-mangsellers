
'use client'
import React from 'react';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../../../styles/layout/layout.scss';
import '../../../styles/demo/Demos.scss';
import { LayoutProvider } from "../../../layout/context/layoutcontext";
import Layout from "../../../layout/layout";
import { Page } from '../../../types/layout';
import { Metadata } from 'next';

type Props = {
    Component: Page,
    children?: any;
}

export const metadata :Metadata ={
    title: 'Mangdropship Dasboard Seller',
    description : 'Seller Mangdropshiper'
}

export default function DasboardLayout({ children, Component } : Props){ 
    return(
        <LayoutProvider>
            <Layout>
                {children}
            </Layout>
        </LayoutProvider>
    )
}
