import React from 'react';
import { Message } from 'primereact/message';

type PropsInfoMessage = {
    severity?: 'info' | 'success' | 'warn' | 'error',
    children?: React.ReactNode,
}

export default function InfoMessage({severity, children} : PropsInfoMessage) {

    const colored = [
        {
            severity: 'warn',
            color: '--bs-warning'
        },
        {
            severity: 'info',
            color: '--bs-info'
        },
        {
            severity: 'success',
            color: '--bs-success'
        },
        {
            severity: 'error',
            color: '--bs-danger'
        }
    ];

    const findColor = colored.find((values) => values.severity === severity ? severity : 'info');
    return (
        <Message
            style={{
                border: `solid ${findColor?.color}`,
                borderWidth: '0 0 0 6px',
                color: `var(${findColor?.color})`
            }}
            className="w-full justify-content-start"
            severity={severity ? severity : 'info'}
            content={children}
        />
    )
}