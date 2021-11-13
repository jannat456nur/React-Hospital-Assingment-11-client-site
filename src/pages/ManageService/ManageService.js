import React, { useEffect, useState } from 'react';


const ManageService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://frozen-reaches-18758.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleFelete = id => {
        const url = `https://frozen-reaches-18758.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                }

            })
    }
    return (
        <div>
            <h4>manage services</h4>
            {
                services.map(services => <div
                    key={services.id}


                >
                    <h4>{services.name}</h4>
                    <button onClick={() => handleFelete(services._id)}>Delete</button>

                </div>)
            }

        </div>
    );
};

export default ManageService;