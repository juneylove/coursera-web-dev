class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

            <header>

                <div id="phone-mobile">

                    <a href="tel:410-602-5008" class="text-decoration-none">
                        <span>We Deliver! 410-602-5008</span>
                    </a>
                </div>
                
                <nav id="header-nav" class="navbar navbar-default navbar-expand-md">
                    <div class="container d-flex">
                        
                        <div class="navbar-header align-self-start">

                            <a href="./index.html" class="float-start collapse navbar-collapse">
                                <div id="logo-img" alt="Logo image"></div>
                            </a>

                            <div class="navbar-brand">
                                <a href="./index.html" class="text-decoration-none"><h1>David Chu's China Bistro</h1></a>
                                <p>
                                    <img src="images/star-k-logo.png" alt="Kosher certification">
                                    <span>Kosher Certified</span>
                                </p>
                            </div>

                        </div>

                        <button type="button" class="navbar-toggler mb-auto" data-bs-toggle="collapse" data-bs-target="#collapsable-nav" aria-expanded="false" aria-controls="collapsable-nav">
                            <span class="visually-hidden">Toggle navigation</span>
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div id="nav-buttons" class="container d-flex flex-column">

                            <div id="collapsable-nav" class="collapse navbar-collapse align-self-end">
                                <ul id="nav-list" class="nav navbar-nav">

                                    <li>
                                        <a href="./menu-categories.html" class="text-decoration-none">
                                            <span class="bi bi-fork-knife"></span><br class="collapse navbar-collapse">Menu
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-decoration-none">
                                            <span class="bi bi-info-circle-fill"></span><br class="collapse navbar-collapse">About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-decoration-none">
                                            <span class="bi bi-award-fill"></span><br class="collapse navbar-collapse">Awards
                                        </a>
                                    </li>

                                    <li id="phone" class="collapse navbar-collapse" >
                                        <div>
                                            <a href="tel:410-602-5008" class="text-decoration-none">
                                                <span>410-602-5008</span>
                                            </a>
                                            <br>
                                            <span>We Deliver!</span>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>

                    </div>
                </nav>

            </header>

            `;

    }
}


customElements.define('header-component', Header);