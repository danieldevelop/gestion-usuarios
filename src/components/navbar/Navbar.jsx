import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary shadow-sm'>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Bootstrap" width="30" height="24" className='d-inline-block align-text-top' />
                    React App
                </Link>
                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to='/home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/addUsuarios'>Nuevo Usuario</Link>
                        </li>
                    </ul>

                    <form className='d-flex' role="search">
                        <input type="search" className="form-control form-control-sm me-2 shadow-none" placeholder='Search' aria-label='Search' />
                        <button className='btn btn-success btn-sm shadow-none' type="button"><i className="bi bi-search"></i></button>
                    </form>
                </div>
            </div>
        </nav>
    )
};


export default Navbar;