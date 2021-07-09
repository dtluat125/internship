function Footer(props){
    return(
        <div className="footer">
            <div className="container footer__container">
                <div className="row row_cs">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3  col-img-cus p-0-cus">
                        <a href="/"><img src="https://campaign.deluxmortgage.sg/svg/logo-text.svg" alt="" className="footer__logo"/>
                        </a>
                    </div>
                    

                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3  p-0-cus">
                        <div className="footer__title">CONTACTS</div>
                        <div className="footer__content">
                            <div className="copy">
                                <strong className="eta">E.</strong><span className="span--contact">sales@deluxmortgage.sg</span>
                            </div>
                            <div className="copy">
                                <strong className="eta">T.</strong><span className="span--contact">+65 9109 1029</span>
                            </div>
                            <div className="copy copy-1">
                                <strong class="eta">A.</strong><span class="span--contact">68 CIRCULAR ROAD #02-01 SINGAPORE (049422)</span>
                            </div>
                        </div>
                    </div>
                
                
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3  p-0-cus">
                        <div className="footer__title">
                            FOLLOW
                        </div>

                        <div className="footer__icon footer__content">
                            <a className="a-cus" href="#" target="_blank">
                                <span className="ic-cont">
                                    <i className="fab fa-linkedin-in"></i>
                                </span>
                            </a>
                    

                        
                            <a className="a-cus" href="#" target="_blank">
                                <span className="ic-cont">
                                    <i className="fab fa-twitter"></i>
                                </span>
                            </a>
                        

                        
                            <a className="a-cus" href="#" target="_blank">
                                <span className="ic-cont">
                                    <i className="fab fa-facebook-f"></i>
                                </span>
                            </a>
                      

                        
                            <a className="a-cus" href="#" target="_blank">
                                <span className="ic-cont">
                                    <i className="fab fa-instagram"></i>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3  p-0-cus">
                        <div className="footer__title">
                            COPYRIGHT
                        </div>
                        <div className="footer__content">
                        <p className="copy copy-2020">© 2021 DeluxMortgage.sg. All rights reserved</p>
                        </div>
                    </div>
                </div>
                <div className="copy-right">
                © 2021 DeluxMortgage.sg. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer
