
import React from 'react';

export default function WaveBackgroundAnimation() {
    return (
        <div className="waveWrapper">
            <div className="waveWrapperInner top">
                <div className="wave waveTop" ></div>
            </div>
            <div className="waveWrapperInner mid">
                <div className="wave waveMid"></div>
            </div>
            <div className="waveWrapperInner bottom">
                <div className="wave waveBottom"></div>
            </div>
        </div>
    )
}