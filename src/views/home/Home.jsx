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
            <p>Estamos en la home</p>

            {
                allUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                        </div>
                    )
                })
            }

            <Link to='/' className='btn btn-primary btn-lg btn-block'>Volver</Link>
        </div>
    )
};


export default Home;