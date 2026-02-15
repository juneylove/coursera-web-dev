class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

            <footer>
        
                <div id="footer-info" class="container">
                    
                    <div class="row">

                        <div class="col-12 col-lg-4">

                            <h4>Hours:</h4>
                            <p>Sun-Thurs: 11:15am - 10:00pm</p>
                            <p>Fri: 11:15am - 2:30pm</p>
                            <p>Saturday: Closed</p>

                        </div>

                        <hr class="footer-divider">

                        <div class="col-12 col-lg-4">

                            <h4>Address:</h4>
                            <p>7105 Reisterstown Road</p>
                            <p>Baltimore, MD 21215</p>
                            <p id="delivery-disclaimer">*Delivery area within 3-4 miles, with minimum order of $20 plus $3 charge for all deliveries.</p>
                            
                        </div>

                        <hr class="footer-divider">

                        <div id="testimonials" class="col-12 col-lg-4">

                            <p>"The best Chinese restaurant I've been to! And that's saying a lot, since I've been to many!"</p>
                            <p>"Amazing food! Great service! Couldn't ask for more! I'll be back again and again!"</p>
                            
                        </div>

                    </div>

                    <div id="copyright-info" class="text-center">

                        <span>&copy; Copyright github/juneylove 2026</span>

                    </div>

                </div>

            </footer>

            `;

    }
}


customElements.define('footer-component', Footer);