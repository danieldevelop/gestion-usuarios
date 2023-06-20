import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailUsers = ({ id }) => {
    const [username, setUsername] = useState([]);
    console.log(username);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            const username = response.data;
            setUsername(username);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);


    return (
        <div className="modal fade" id="mdlDetailUsers" tabindex="-1" aria-labelledby="mdlDetailUsersLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="mdlDetailUsersLabel">Modal title {username.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <p>
                            {/* {
                                username?.map((user) => {
                                    return (
                                        <div key={user.id}>
                                            <p>{user.name}</p>
                                            <p>{user.email}</p>
                                            <p>{user.phone}</p>
                                        </div>
                                    );
                                })
                            } */}
                        </p>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default DetailUsers;