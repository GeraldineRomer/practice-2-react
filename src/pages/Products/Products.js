import React from 'react';
import './Products.scss';
import { MenuCube } from '../../components/Menu/MenuCube';
import { Cube } from '../../components/Cube/Cube';

export const Products = () => {
    return (
        <div>
            <Cube/>
            <div class="Products">
                Products
            </div>
        </div>
    )
}
