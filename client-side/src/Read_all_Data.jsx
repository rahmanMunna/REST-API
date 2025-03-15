import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read_all_Data = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/phones')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])



    return (
        <>
            <h1>All Data from Server-side</h1>
            <div>
                {
                    phones.map(phone => <li key={phone.id}>{phone.id}-{phone.phoneName}
                        <Link to={`/phones/${phone.id}`}>
                            <button>View More</button>
                        </Link>
                        <Link to={`/updatePhoneData/${phone?.id}`}>
                            <button>
                                Update
                            </button>
                        </Link>
                    </li>)
                }
            </div>
        </>
    );
};

export default Read_all_Data;