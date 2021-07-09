


function Header(){
    return(
        <div className="header">

                <div className="green-bg">
                <div className="element-container">
                    <div className="header__logo">
                        <img id="site-logo" src="https://campaign.deluxmortgage.sg/img/copy_logobot_.png" alt="" />
                    </div>
                    
                    <div className="header__columns row">
                        <div className="col-md-6">
                            <div className="header__column-1">
                                <div className="header__column-1-content">
                                    <h1>DISCOVER THE BEST HOME LOAN RATES IN SINGAPORE WITH US</h1>
                                    <p>Compare and save with mortgage rates as low as  <span class="bold-number">0.85%</span> today</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="header__column-2">
                                <div className="form">
                                    <div className="form__header">
                                        Delux Online Home Owners Exclusive
                                    </div>

                                    <div className="form__body">
                                    <div className="form__body-header">
                                        Get the lowest rates and up to 
                                        <span className="head_light"> S$888
                                        </span> vouchers for a limited time
                                    </div>
                                    <form action="" className="form__body-content">
                                        <div className="form__body-row">
                                            <label className="form-group-new">
                                            <input name="fullName" type="text" className="form-control-new " required />
                                                <span>Full Name&nbsp;
                                                <span className="red_ark_cs">*</span>
                                                </span>
                                                <span className=""></span>
                                            </label>

                                            <label className="form-group-new">
                                                <input name="email" type="text" className="form-control-new" required/>
                                                <span>Email&nbsp;<span className="red_ark_cs">*</span>
                                                </span><span className=""></span>
                                            </label>
                                        </div>

                                        <div className="form__body-row">
                                            <div className="form-group form-group-cs-row">
                                                
                                                <div className="cus_phone react-tel-input">
                                                    <label className="form-group__label">
                                                    Phone number <span className="red_ark">*</span>
                                                    </label>
                                                    <div className="special-label">Phone</div>
                                                    <input className="input_phone form-control input-cs" placeholder="1 (702) 123-4567" type="tel" name="phone" required="" value="+65"/>
                                                    <div className=" flag-dropdown">
                                                        <div className="selected-flag" title="Singapore: + 65" tabindex="0" role="button" aria-haspopup="listbox">
                                                            <div className="flag sg">
                                                                <div className="arrow">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                
                                            </div>

                                            <div class="cus_prop-type form-group-cs-row">
                                                    <label class="form-group__label">Property Type</label>
                                                    <select name="propertyType" class="form-control select-cs input-cs">
                                                        <option value="HDB">HDB</option><option value="EC">EC</option>
                                                        <option value="Condo">Condo</option><option value="Landed">Landed</option>
                                                    </select>
                                                </div>
                                        </div>

                                        <div className="form__body-row">
                                            <div className="form-group form-group-cs-row">
                                                <label className="form-group__label">Loan Amount Required (SGD)</label>
                                                <div className="loan-input-field input-cs">
                                                    <div className="loan-input-field__currency-wrapper">
                                                        <p className='loan-input-field__currency'>$</p>
                                                    </div>
                                                    <input type="text" className="form-control-new"/>
                                                </div>
                                                

                                            </div>
                                        </div>

                                        <div className="form__body-check form-group">
                                        <input name="consent" type="checkbox" className="form-check__input" id="exampleCheck1"/>
                                        <label htmlFor="consent" className="form-check__label">
                                        I consent to be contacted by DeluxMortgage for any follow up action regarding my mortgage enquiry
                                        </label>

                                        </div>

                                        <div className="form__body-button">
                                        <button type="submit" className="  btn_cs btn_animate btn">Get Rates Now</button>
                                        </div>
                                    </form>
                                    
                                    <div className="header__footer">
                                    You'll receive a non-obligatory call from us to help you with your mortgage enquiry. 100% free, 0 Risk. Hang up any time.
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Header;