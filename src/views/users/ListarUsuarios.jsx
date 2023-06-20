import React from "react";

import DetailUsers from "./DetailUsers";

const ListarUsuarios = ({ allUsers }) => {
    return (
        <div className="table-responsive">
            <table className="table table-sm table-striped table-hover">
                <thead>
                    <tr className="text-center">
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th colSpan="3"></th>
                    </tr>
                </thead>
                <tbody>
                {
                    allUsers?.map((user) => {
                        return (
                            <tr className="text-center" key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td className="d-flex gap-2">
                                    <button className="btn btn-sm btn-secondary shadow-none" title="Detalle del usuario" data-bs-toggle="modal" 
                                    data-bs-target="#mdlDetailUsers">
                                        <i className="bi bi-eye"></i>
                                        <DetailUsers id={user.id}/>
                                    </button>
                                    <button className="btn btn-sm btn-success shadow-none" title="Editar Usuario"><i className="bi bi-pencil-square"></i></button>
                                    <button className="btn btn-sm btn-danger shadow-none" title="Eliminar Usuario"><i className="bi bi-x-circle"></i></button>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>    
        </div>
    )
};

export default ListarUsuarios;