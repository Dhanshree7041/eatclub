import React from "react"; 
import Logo from "../assets/images/swiggy.png"

const Footer=()=>{
    return(

        <div className="container-fluid footer bg-light py-2 mt-5">
            <div className="container py-2">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-item">
                        <img src={Logo} style={{width:"60px"}}/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-item d-flex flex-column">
                            <h3 className="mb-4 text-black">Company</h3>
                            <a href="javascript:;"><i className="fas fa-angle-right me-2"></i> About</a>
                            <a href="javascript:;"><i className="fas fa-angle-right me-2"></i> Careers</a>
                            <a href="javascript:;"><i className="fas fa-angle-right me-2"></i> Team</a>
                            <a href="javascript:;"><i className="fas fa-angle-right me-2"></i> Swiggy One</a>
                            <a href="javascript:;"><i className="fas fa-angle-right me-2"></i> Swiggy instamart</a>
                            <a href="javascript:;"><i className="fas fa-angle-right me-2"></i> Swiggy genie</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-item d-flex flex-column">
                            <h3 className="mb-4 text-black">Conatct Us</h3>
                            <a href="javascript:;"><i className="fas fa-angle-right me-2"></i> Help & support</a>
                            <a href="javascript:;"><i className="fas fa-angle-right me-2"></i> Partner with us</a>
                            <a href="javascript:;"><i className="fas fa-angle-right me-2"></i> Ride with us</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                       <div className="footer-item d-flex flex-column">
                            <h3 className="mb-4 text-black">We deliever to</h3>
                            <a href="javascript:;"><i className="fas fa-angle-right me-2"></i> Banglore</a>
                            <a href="javascript:;"><i className="fas fa-angle-right me-2"></i> Gurgoan </a>
                            <a href="javascript:;"><i className="fas fa-angle-right me-2"></i> Hydrabad</a>
                            <a href="javascript:;"><i className="fas fa-angle-right me-2"></i> Delhi</a>
                            <a href="javascript:;"><i className="fas fa-angle-right me-2"></i> Mumbai</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
  }
  export default Footer