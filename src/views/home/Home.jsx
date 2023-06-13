import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <p>Estamos en la home</p>

            <Link to='/' className='btn btn-primary btn-lg btn-block'>Volver</Link>
        </div>
    )
};


export default Home;