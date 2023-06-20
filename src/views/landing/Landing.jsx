import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="m-5">
            <div className="container">
                <h1 className='text-center' style={{"color": "#3F3F3F"}}>¡Bienvenido!</h1>
                <p className='text-center'>Gestor de usuarios...</p>

                <div className="text-center">
                    <Link to='/home' className='btn btn-outline-primary btn-sm mt-2 text-uppercase fw-semibold'>
                        Ingresar al sistema
                    </Link>
                </div>
            </div>
        </div>
    )
};


export default Landing;