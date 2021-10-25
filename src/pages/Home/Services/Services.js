import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

function Services() {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        
            
            <div id="services" className="service-container">


                {services.map(service => <Service
                    key={service.key}
                    service={service}
                ></Service>)}
            </div>
        
    );
}

export default Services;