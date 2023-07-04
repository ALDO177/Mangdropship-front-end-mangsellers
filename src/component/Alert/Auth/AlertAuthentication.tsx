

'use client';

import { PropsAlertComponent } from "@/interface/AuthInterface";
import React from "react";
import { Alert } from "react-bootstrap";

export default function AlertAuthentication(props: PropsAlertComponent){
    return(
        <Alert variant={props?.type} onClose={props?.callback} dismissible={props?.typeClose}>
            {props?.children}
        </Alert>
    )
}