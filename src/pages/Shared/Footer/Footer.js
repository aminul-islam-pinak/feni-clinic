import React from 'react';

const Footer = () => {
    return (
        <div>
           
            <div className="container my-5" >
               
                <footer
                    className="text-center text-lg-start text-black"
                 
                >
                  
                    <div className="container p-4 pb-0">
                        
                        <section className="">
                           
                            <div className="row">
                               
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Feni Clinic
                                    </h6>
                                    <p>
                                        We are the health partners you can trust with your life. Our only priority is caring for you. We set the standard in medical care. We make healing and medicine our 2 main specialties
                                    </p>
                                </div>
                              

                                <hr className="w-100 clearfix d-md-none" />

                             
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
                                    <p>
                                        <a className="text-black">primary care services.</a>
                                    </p>
                                    <p>
                                        <a className="text-black">mental health and drug treatment.</a>
                                    </p>
                                    <p>
                                        <a className="text-black">infectious disease clinics.</a>
                                    </p>
                                    <p>
                                        <a className="text-black">hospice care.</a>
                                    </p>
                                </div>
                                
                                <hr className="w-100 clearfix d-md-none" />

                               
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a className="text-black">Your Account</a>
                                    </p>
                                    <p>
                                        <a className="text-black">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a className="text-black">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a className="text-black">Help</a>
                                    </p>
                                </div>

                                
                                <hr className="w-100 clearfix d-md-none" />

                               
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p><i className="fas fa-home mr-3"></i> Feni, NY 10012, US</p>
                                    <p><i className="fas fa-envelope mr-3"></i> feniclinic@gmail.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>
                               
                            </div>
                            
                        </section>
                        

                       
                      
                        <section className ="p-3 pt-0">
                        <div className ="row d-flex align-items-center">
                        
                        <div className ="col-md-7 col-lg-8 text-center text-md-start">
                       
                        <div className ="p-3">
                        © 2020 Copyright:
                        <a className ="text-black" href= "https://feniclinic.com/"
                        >feniclinic.com</a
                        >
                        </div>
                      
                        </div>
                       
                       
                        <div className ="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                       
                        <a
                        className ="btn btn-outline-light btn-floating m-1"
                        className ="text-black"
                        role="button"
                        ><i className ="fab fa-facebook-f"></i
                        ></a>

                      
                        <a
                        className ="btn btn-outline-light btn-floating m-1"
                        className ="text-black"
                        role="button"
                        ><i className ="fab fa-twitter"></i
                        ></a>

                      
                        <a
                        className ="btn btn-outline-light btn-floating m-1"
                        className ="text-black"
                        role="button"
                        ><i className ="fab fa-google"></i
                        ></a>

                     
                        <a
                        className ="btn btn-outline-light btn-floating m-1"
                        className ="text-black"
                        role="button"
                        ><i className ="fab fa-instagram"></i
                        ></a>
                        </div>
                       
                        </div>
                        </section>
                       
                    </div>
                    
                </footer>
            
            </div>
        
        </div>
    );
};

export default Footer;