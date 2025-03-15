import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phone = () => {
    const receivedPhone = useLoaderData();
    const [phone, setPhone] = useState(receivedPhone);
    console.log(phone)

    const handleDelete = (id) => [
        // console.log(id)
        fetch(`http://localhost:5000/phones/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    alert('Phone has been removed!!')
                    setPhone(null)
                }
                else {
                    alert('Phone Could been removed')
                }
            })

    ]

    return (
        <div>
            {
                phone ?
                    <div>
                        <h2>Phone id : {phone?.id}</h2>
                        <h2>phone Name : {phone?.phoneName}</h2>
                        <h2>Price : {phone?.price}</h2>
                        <button onClick={() => handleDelete(phone?.id)}>Delete</button>
                       
                    </div>
                    :
                    <h1>No phones is available to show</h1>
            }
        </div>
    );
};

export default Phone;