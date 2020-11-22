import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="page-footer font-small elegant-color">


                    <div class="container text-center text-md-left pt-4 pt-md-5">
                        <div class="row mt-1 mt-md-0 mb-4 mb-md-0">
                            <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">

                                <h5>About</h5>
                                <hr class="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>
                                    <p class="foot-desc mb-0">In development... </p>

                            </div>


                            <hr class="clearfix w-100 d-md-none"/>


                                <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">


                                    <h5>Info</h5>
                                    <hr class="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>

                                        <ul class="list-unstyled foot-desc">
                                            <li class="mb-2">
                                                <a href="#!">Link</a>
                                            </li>
                                            <li class="mb-2">
                                                <a href="#!">Link</a>
                                            </li>
                                            <li class="mb-2">
                                                <a href="#!">Link</a>
                                            </li>
                                            <li class="mb-2">
                                                <a href="#!">Link</a>
                                            </li>
                                        </ul>

                                </div>


                                <hr class="clearfix w-100 d-md-none"/>


                                    <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">


                                        <h5>Quick links</h5>
                                        <hr class="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>

                                            <ul class="list-unstyled foot-desc">
                                                <li class="mb-2">
                                                    <a href="#!">Your Account</a>
                                                </li>
                                                <li class="mb-2">
                                                    <a href="#!">Become an Affiliate</a>
                                                </li>
                                                <li class="mb-2">
                                                    <a href="#!">Shipping Rates</a>
                                                </li>
                                                <li class="mb-2">
                                                    <a href="#!">Help</a>
                                                </li>
                                            </ul>

                                    </div>


                                    <hr class="clearfix w-100 d-md-none"/>


                                        <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">

                                            <h5>Contacts</h5>
                                            <hr class="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>

                                                <ul class="fa-ul foot-desc ml-4">
                                                    <li class="mb-2"><span class="fa-li"><i class="far fa-map"></i></span>Ottawa, 100 Binary Avenue
                                                    </li>
                                                    <li class="mb-2"><span class="fa-li"><i class="fas fa-phone-alt"></i></span>613 010 0110</li>
                                                    <li class="mb-2"><span class="fa-li"><i class="far fa-envelope"></i></span>company@example.com</li>
                                                    <li><span class="fa-li"><i class="far fa-clock"></i></span>Monday - Friday: 10am - 10pm</li>
                                                </ul>

                                        </div>


                        </div>
                    </div>


                    <div class="footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="http://manlin.com/"> manlin.com</a>
                    </div>

                </footer>

            </div>
        );
    }
}

export default Footer;