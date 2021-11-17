import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageOrders = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://frozen-reaches-18758.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://frozen-reaches-18758.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = services.filter(service => service._id !== id);
                        setServices(remainingUsers);
                    }
                });
        }
    }
    return (

        <div>
            <h2>Order Available: {services.length} </h2>
            <ul>
                {
                    services.map(services => <li
                        key={services._id}
                    >{services.productName} : {services.description}
                        <Link to={`/users/update/${services._id}`}><button>Update</button></Link>
                        <button onClick={() => handleDeleteUser(services._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};



export default ManageOrders;