import React from "react";
import Tilty from 'react-tilty';
import './Logo.css';
import brain from './brain.png'


const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilty className="tilty br4 shadow-2" glare scale={1.05} maxGlare={0.5}>
                <div className="inner"><img src={brain} alt="logo"/></div>
            </Tilty>
        </div>
    )
}

export default Logo;