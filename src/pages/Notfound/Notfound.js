import React from 'react';
import {Link} from 'react-router-dom'

const Notfound = () => {
    return (
        <div>
            <img style={{width:'100%'}} src="https://image.freepik.com/free-vector/404-error-isometric-landing-banner-website-maintenance-page-found-concept-with-traffic-cones-sign-construction_107791-3733.jpg" alt="" />

            <Link to="/">
           <button className="text-primary mt-2">Go Back</button>
            </Link>
        </div>
    );
};

export default Notfound;