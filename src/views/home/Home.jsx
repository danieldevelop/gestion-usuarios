import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../../components/navbar/Navbar";
import ListarUsuarios from "../users/ListarUsuarios";

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
            <Navbar />

            <div className="container">
                <h2 className="mt-4 ml-4 mb-4 h3 fw-normal">Mis Usuarios</h2>

                <ListarUsuarios allUsers={allUsers} />
            </div>
        </div>
    )
};


export default Home;