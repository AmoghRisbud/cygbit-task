import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Userdetails.css'

const UserDetails = () => {
    
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(
            `https://reqres.in/api/users/${id}`
        )
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error('something went wrong while requesting posts');
            })
            .then(function (resp) {
                setUser(resp.data);
                console.log(resp);

            })
            .catch((error) => setError(error.message));
    }, []);

    var fname = user.first_name + '';
    var lname = user.last_name + '';
    var avatar = fname.charAt() + lname.charAt();
   
    return (

        <div className='description'>
            <div className='title'>
                <div className="avatar">
                    <h2>{avatar}</h2>
                </div>
                <div className='username'>
                    <h1>{user.first_name + "  " + user.last_name}</h1>
                </div>
            </div>
            <div >
                <h2 className='info-title'>
                    General Information
                </h2>
                <hr>
                </hr>
                <div className='generalinfo'>

                    <div className='information'>
                        <h2>
                            User ID
                        </h2>
                        <h2 className='attributes'>{user.id}</h2>
                    </div>
                    <div className='information'>
                        <h2>
                            User Email
                        </h2>
                        <h2 className='attributes'>{user.email}</h2>
                    </div>
                    <div className='information'>
                        <h2>
                            FirstName
                        </h2>
                        <div >
                            <h2 className='attributes'>{user.first_name}</h2>
                            
                        </div>

                    </div>
                    <div className='information'>
                        <h2>
                            LastName
                        </h2>
                        <div >
                            <h2 className='attributes'>{user.last_name}</h2>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserDetails;