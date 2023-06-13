import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [allUsers, setAllUsers] = useState([]);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const allUsers = response.data;
            setAllUsers(allUsers);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <div>
            <div className="container">
                <h2 className="text-center mt-3">Usuarios</h2>
            </div>

            <div className="container">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>

            <Link to='/' className='btn btn-primary btn-lg btn-block'>Volver</Link>
        </div>
    )
};


export default Home;