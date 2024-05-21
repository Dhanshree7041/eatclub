import React from "react"; 

const Footer=()=>{
    return(

        <div class="bg-body-tertiary bg-dark">
            <div class="container p-4">
                <div class="row g-5">
                    <div class="col-md-4 col-lg-4">
                    <div class="footer-item d-flex flex-column">
                            <h3 class="mb-4 text-white">We deliver to:</h3>
                            <a href="javascript:;">Bangalore</a>
                            <a href="javascript:;">Gurgaon</a>
                            <a href="javascript:;">Hydrabad</a>
                            <a href="javascript:;">Delhi</a>
                            <a href="javascript:;">Pune</a>
                            <a href="javascript:;">Mumbai</a>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="footer-item d-flex flex-column">
                            <h3 class="mb-4 text-white">Quick Links</h3>
                            <a href="javascript:;">Home</a>
                            <a href="javascript:;">About us</a>
                            <a href="javascript:;">Contact Us</a>
                            <a href="javascript:;">Cart</a>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="footer-item d-flex flex-column">
                            <h3 class="mb-4 text-white">Get In Touch</h3>
                        <p class="mb-2 text-white">Adelmar house, 16th cross road, Next to Anand Ashram Khar (W), Mumbai-400052</p>
                        <p class="mb-2"><a href="tel:+919819658790">9148754775</a></p>
                        </div>
                    </div>
                </div>
                <p class="mb-2 text-center "><a href="#">©2024. Swiggy. All Rights Reserved.</a></p>
            </div>
        </div>

    )
  }
  export default Footer