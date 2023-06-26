'use client'

import { PropsForPageRegister } from "@/interface/AuthInterface";
import React from "react";

export default class PageRegister extends React.Component<PropsForPageRegister>{

    public constructor(props: PropsForPageRegister){
        super(props);
    }

    render(): React.ReactNode {
        return <h1>Page Register...</h1>
    }
}