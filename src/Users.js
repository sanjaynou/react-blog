import React, { useState, useEffect, Fragment } from "react";
import * as ReactDOM from "react-dom";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Users() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://reqres.in/api/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.data);
                    console.log(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Fragment>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Avtar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Link to={`/user-details/${item.id}`}>{item.first_name} {item.last_name}</Link></td>
                                <td>{item.email}</td>
                                <td><img src={item.avatar} alt="Avatar"></img></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Fragment>
        )
    }
}

export default Users;