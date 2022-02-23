import React from 'react';
import {SeleccionesList} from '../helpers/SeleccionesList';
import MenuItem from '../components/MenuItem';
import '../styles/Selecciones.css';


function Selections () {
    return (
        <div className='selecciones'>
            <h1 className='seleccionesTitle'> Selecciones Mundiales </h1>
            <div className='seleccionesList'>
                {SeleccionesList.map((menuItem,key) => {
                    return (
                        <MenuItem 
                         key={key}
                         image={menuItem.image} 
                         name={menuItem.name} 
                        />
                    );
                })} 
            </div>
        </div>
    );
}

export default Selections ;