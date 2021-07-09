

function Section6(props){
    return(
        <div className="section6">
            <div className="section6__header">
                <h1 className="section6__header__title">FAQ</h1>
                <p className="section6__header__description">Feel free to let us know what other questions you may have!</p>
            </div>

            <div className="question-list">
                <div className="question-list__left">
                    <div className="question-list__item">
                        <a className="question" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                            <img src="https://campaign.deluxmortgage.sg/img/group_37.png" alt=""/>Do i have to pay for this service?
                        </a>
                        <div className="description-collap collapse" id="collapseExample1">Our service is 100% free to you. We charge a flat fee to our partner banks and it is consistent with every banks. Therefore there is no conflict of interest in getting you the best.</div>
                    </div>
                    <div className="question-list__item">
                        <a className="question" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample1">
                            <img src="https://campaign.deluxmortgage.sg/img/group_37.png" alt=""/>If you are being paid a referral fee by the bank, does that means i do not get the lowest rates?
                        </a>
                        <div className="description-collap collapse" id="collapseExample2">We transact in volume with our partner banks therefore we will always command the lowest interest rates in the market. With high number of cases being referred to each bank daily, we are able to get packages that you might not get access to.</div>
                    </div>
                    <div className="question-list__item">
                        <a className="question" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample1">
                            <img src="https://campaign.deluxmortgage.sg/img/group_37.png" alt=""/>I would like to change my package with my existing bank, can you help?
                        </a>
                        <div className="description-collap collapse" id="collapseExample3">Yes, we will definitely point you in the right direction. We take pride in making sure that everyone is fully aware of their options available in the current home loan market.</div>
                    </div>
                </div>
                <div className="question-list__right">
                    <div className="question-list__item">
                        <a className="question" data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample1">
                            <img src="https://campaign.deluxmortgage.sg/img/group_37.png" alt=""/>I am only buying my property later this year. Can i learn more about my loan eligibility? My lock in period for my existing loan is 6 months away, should i start my refinancing now?
                        </a>
                        <div className="description-collap collapse" id="collapseExample4">Delux Mortgage is always here for you. Be it now or the future. We believe everyone deserve to have access to knowledge. Also for refinancing, you can start refinancing as early as 6 months before the lock in period is over. You are able to lock in the lower rates earlier so that you do not incur additional interest when your lock in period is up</div>
                    </div>
                    <div className="question-list__item">
                        <a className="question" data-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample1">
                            <img src="https://campaign.deluxmortgage.sg/img/group_37.png" alt=""/>Is my contact details and information safe?
                        </a>
                        <div className="description-collap collapse" id="collapseExample5">Yes, a definite 100%. This is also the last thing we want you to worry about. We value your privacy and will never sell your information or pass your details to any 3rd party without your permission.</div>
                    </div>
                </div>
            </div>
            <div className="button-contact">
                <button> Get Rates Now</button>
            </div>
        </div>
    )
}

export default Section6
