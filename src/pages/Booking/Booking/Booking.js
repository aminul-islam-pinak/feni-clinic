import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import {useParams} from 'react-router'

const Booking = () => {
    
    const { serviceId } = useParams();
    return (
      
        <div>
            <h2>This Doctor Appoinment ID : {serviceId}</h2>
            <Form>
                <Row className="mb-3 mx-4">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Appoinment ID</Form.Label>
                        <Form.Control type="ID" placeholder="ID" />
                    </Form.Group>
                </Row>

                <Row className="mb-3 mx-4">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="address" placeholder="address" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="city" placeholder="city" />
                    </Form.Group>
                </Row>

              

               

                <Button className="btn btn-warning" type="submit">
                    Submit
                </Button>
            </Form>
            
        </div>
    );
};

export default Booking;