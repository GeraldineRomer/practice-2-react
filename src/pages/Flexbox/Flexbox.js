import React from 'react'
import './Flexbox.scss';
import { MenuCube } from '../../components/Menu/MenuCube';
import { Cube } from '../../components/Cube/Cube';

export const Flexbox = () => {
    return (
        <div>
            <Cube/>
            <div class="Flexbox">
                Flexbox
            </div>
        </div>
    )
}

