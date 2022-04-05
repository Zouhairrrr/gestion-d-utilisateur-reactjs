import React, { useState, useEffect } from 'react';
import { Add } from './Add';


let users = [
    {

        id: "123456789",

        createdDate: "2021-01-06T00:00:00.000Z",

        status: "En validation",

        firstName: "Mohamed",

        lastName: "Taha",

        userName: "mtaha",

        registrationNumber: "2584",

    },
    {

        id: "987654321",

        createdDate: "2021-07-25T00:00:00.000Z",

        status: "Validé",

        firstName: "Hamid",

        lastName: "Orrich",

        userName: "horrich",

        registrationNumber: "1594",

    },
    {

        id: "852963741",

        createdDate: "2021-09-15T00:00:00.000Z",

        status: "Rejeté",

        firstName: "Rachid",

        lastName: "Mahidi",

        userName: "rmahidi",

        registrationNumber: "3576",

    }

]

function Table() {


 


    const [defaultUsers, setUsers] = useState(users)
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("key"))
        if (storedUsers) setUsers(storedUsers)
    }, [])
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [defaultUsers])
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Date de création</th>
                        <th scope="col">ETAT</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Nom d'utilisateur</th>
                        <th scope="col">Matricule</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody >
                    {users.map((user, key) => {
                        return (
                            <tr key={key}>
                                <td>{user.id}</td>
                                <td>{user.createdDate}</td>
                                <td>{user.status}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.userName}</td>
                                <td>{user.registrationNumber}</td>
                                <td>
                                    <button className="btn btn-info badge badge-pill badge-info text-uppercase">Edit</button>
                                    <button className="btn btn-danger badge badge-pill badge-danger text-uppercase">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Table;