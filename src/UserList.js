import User from "./User";
import React, { useState, useEffect } from 'react';
import './User.css';

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {

        fetch(
            `https://reqres.in/api/users?page=1`
        )
        .then((response) => {
            if (response.ok) return response.json();
            throw new Error('something went wrong while requesting posts');
        })
        .then((resp) => setUsers(resp.data))
        .catch((error) => setError(error.message));

    }, []);

    return (
        <div >
            {!users.length ? (
                <h1>No Users Found</h1>
            ) : (
                users.map((user) => {
                    return (
                        <div >
                        <User
                            id={user.id}
                            email={user.email}
                            firstname={user.first_name}
                            lastname={user.last_name}
                            key={user.id}
                            
                        />
                        <hr className='userlist'></hr>
                        </div>
                    );
                })
            )} 
        </div>
    );
};

export default UserList;
