import React from 'react';

export const  Footer=()=>{
    return(
        <section className="footer-section">
            <div className="container">
                <div className="row mb-2">
                    <div className="col-md-3 col-sm-6 col-lg-3 col-xs-12 col-xl-3">
                        <div className="footer-company-info ">
                            <h6>WINkel</h6>
                            <p>liquam necessitatibus! Rerum, consequatur. A adipisci deserunt tenetur ea commodi minima?</p>
                            <span><i>iocns</i></span><span><i>iocns</i></span><span><i>iocns</i></span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-lg-3 col-xs-12 col-xl-3">
                        <div className="footer-menu">
                            <h6>MENU</h6>
                            <ul>
                                <li><a href="#home">About</a></li>
                                <li><a href="#home">Help</a></li>
                                <li><a href="#home">Contact</a></li>
                                <li><a href="#home">Shop</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-3 col-sm-6 col-lg-3 col-xs-6 col-xl-3">
                    <div className="footer-menu">
                            <h6>Help</h6>
                            <ul>
                                <li><a href="#home">Privacy</a></li>
                                <li><a href="#home">Insurance</a></li>
                                <li><a href="#home">Bank Payment</a></li>
                                <li><a href="#home">Apni Shop</a></li>
                            </ul>


                        </div>
                        
                    </div>
                    <div className="col-md-3 col-sm-6 col-lg-3 col-xs-6 col-xl-3">
                        <div className="footer-question">
                            <h6>Services</h6>
                            <ul>
                                <li><a href="#home">Find Products </a></li>
                                <li><a href="#home">Sell your Product</a></li>
                                <li><a href="#home">Create Your shop</a></li>
                                <li><a href="#home">Manage Everything </a></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 col-lg-12 col-sm-12">
                        <div className="copy-right text-center">
                        <p>© 2018 Free companyName. All Rights Reserved.</p>
                        <p>Designed by storkCode.com </p>
                        <p><span><i>icon1</i></span><span><i>icon1</i></span><span><i>icon1</i></span><span><i>icon1</i></span></p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )

}