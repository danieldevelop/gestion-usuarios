import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container'>
            <div className="row m-5">
                <div className="col-md-12">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h1 className='text-center'>404</h1>
                            <h2 className='text-center'>Not Found</h2>
                            <p className='text-center'>The page you are looking for does not exist.</p>
                            <div className="d-grid gap-2">
                                <Link className='btn btn-outline-primary btn-sm shadow-none fw-semibold text-uppercase' to='/home'>Go Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default NotFound;