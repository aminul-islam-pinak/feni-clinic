import React from 'react';
import { Card } from 'react-bootstrap';

const Specialize = ({ specialize}) => {
    const { key, employe_des, employe_name, profile_image } = specialize;
    return (
        <div className="col-lg-4 col-sm-6 col-12 my-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={profile_image} />
                <Card.Body>
                    <h4>ID: {key}</h4>
                    <Card.Title>Name: {employe_name}</Card.Title>
                    <h6 className="text-danger">Specialty: {employe_des}</h6>
                    
                    
                   
                </Card.Body>
            </Card>
        </div>
    );
};

export default Specialize;