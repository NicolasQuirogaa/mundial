import React from 'react';
import Qatar from '../assets/qatar.jpg';
import '../styles/About.css'


function About() {
    return (
        <div className='about'>
            <div className='aboutTop'
             style={{ backgroundImage:`url(${Qatar})`}}
            > 
            </div>
            <div className='aboutBottom'> 
                <h1> SOBRE NOSOTROS </h1>
                    <p>
                     La FIFA existe para gobernar el fútbol y desarrollar el juego en todo el mundo. Desde 2016, la organización ha evolucionado rápidamente hasta convertirse en un organismo que puede servir de manera más eficaz al fútbol en beneficio de todo el mundo.
                     Bajo nuestra visión de hacer que el fútbol sea verdaderamente global, ayudaremos a desarrollar el fútbol en cualquier lugar para que haya al menos 50 selecciones nacionales y 50 clubes de todos los continentes que puedan competir al más alto nivel.
                    </p>
            </div>
        </div>
    )
}

export default About;
