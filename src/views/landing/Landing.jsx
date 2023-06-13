import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <section className="mt-3">
            <div className="container">
                <h1 className='text-center'>Gestiona tu usuarios, sin rodeos</h1>
                <p className='text-center'>Con esta aplicación podrás gestionar tus usuarios de forma sencilla y rápida.</p>

                <Link to='/home' className='btn btn-primary btn-lg btn-block'>Ingresa</Link>
            </div>
        </section>
    )
};


export default Landing;