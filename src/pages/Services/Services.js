import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        //load data
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setService(data))
    })
    return (
        <div className="row">
            <h1 className="pt-5 pb-5">Our Services</h1>
            {
                //map services
                service.map(service => <Service
                    key={service.id}
                    service={service}
                >

                </Service>)
            }
        </div>
    );
};

export default Services;