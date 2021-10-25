import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Service = ({service}) => {
    const { key, employe_name,  description, profile_image}=service;
    return (
       
        <div>
            
            <div className="container-fluid mt-5">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={profile_image} />
                    <Card.Body>
                        <Card.Title>{employe_name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/booking/${key}`}>
                            <Button className="btn btn-warning">Doctor Appoinment</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Service;