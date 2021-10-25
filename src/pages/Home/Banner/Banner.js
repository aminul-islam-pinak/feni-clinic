import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/african-doctor-specialist-using-stethoscope-listening-senior-man-heart-laying-bed-breathing-with_482257-2864.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                      
                        <p>To feel better always try to be happy, positive even you are sick.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/medium-shot-health-workers-hospital_23-2148894886.jpg?size=338&ext=jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                      
                        <p>If you be sick, your own thoughts make you sick.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/pediatrician-writing-prescription-kid-after-examination-healthcare-practitioner-physician-specialist-medicine-providing-health-care-services-consultation-diagnostic-treatment-hospital_482257-14541.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    
                        <p>How the happiness goes the illness time will go also.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;