import React from "react";
import imageList from "./data";
function Section1(){
    return (
        <div className="section1">
            <div className="element-container">
                <div className="columns-wrapper">
                    <div className="column">
                        <div className="column__header">
                        <div class="column__header__left">
                            <div class="new_pu">Private</div>
                            <div class="buc">Resale</div>
                        </div>
                        <div className="column__header__right">
                            <img src="https://campaign.deluxmortgage.sg/img/c1.png"/>
                        </div>
                        </div>
                        <div className="line"></div>
                        <div className="column__body">
                            <div className="column__body__row">
                                <div class="sibor">Floating</div>
                                <div class="num_percent">0.85%</div>
                            </div>
                            <div className="column__body__row">
                                <div class="sibor">2 Years Fixed</div>
                                <div class="num_percent">1.10%</div>
                            </div>
                            <div className="column__body__row">
                                <div class="sibor">3 Years Fixed</div>
                                <div class="num_percent">1.12%</div>
                            </div>
                            <div className="column__body__row">
                                <div class="sibor">4 Years Fixed</div>
                                <div class="num_percent">1.58%</div>
                            </div>
                            <div className="column__body__row">
                                <div class="sibor">5 Years Fixed</div>
                                <div class="num_percent">1.68%</div>
                            </div>
                        </div>
                    </div>


                    <div className="column">
                        <div className="column__header">
                        <div class="column__header__left">
                            <div class="new_pu">HDB</div>
                            <div class="buc">Resale</div>
                        </div>
                        <div className="column__header__right">
                            <img src="https://campaign.deluxmortgage.sg/img/c2.png"/>
                        </div>
                        </div>
                        <div className="line"></div>
                        <div className="column__body">
                            <div className="column__body__row">
                                <div class="sibor">Floating</div>
                                <div class="num_percent">0.85%</div>
                            </div>
                            <div className="column__body__row">
                                <div class="sibor">2 Years Fixed</div>
                                <div class="num_percent">1.10%</div>
                            </div>
                            <div className="column__body__row">
                                <div class="sibor">3 Years Fixed</div>
                                <div class="num_percent">1.12%</div>
                            </div>
                            <div className="column__body__row">
                                <div class="sibor">4 Years Fixed</div>
                                <div class="num_percent">1.58%</div>
                            </div>
                            <div className="column__body__row">
                                <div class="sibor">5 Years Fixed</div>
                                <div class="num_percent">1.68%</div>
                            </div>
                        </div>
                    </div>


                    <div className="column">
                        <div className="column__header">
                        <div class="column__header__left">
                            <div class="new_pu">Private</div>
                            <div class="buc"> Under Construction</div>
                        </div>
                        <div className="column__header__right">
                            <img src="https://campaign.deluxmortgage.sg/img/c3.png"/>
                        </div>
                        </div>
                        <div className="line"></div>
                        <div className="column__body">
                            <div className="column__body__row">
                                <div class="sibor">Floating</div>
                                <div class="num_percent">0.85%</div>
                            </div>
                            <div className="column__body__row">
                                <div class="sibor">2 Years Fixed</div>
                                <div class="num_percent">1.10%</div>
                            </div>
                            <div className="column__body__row">
                                <div class="sibor">3 Years Fixed</div>
                                <div class="num_percent">1.12%</div>
                            </div>
                            <div className="column__body__row">
                                <div class="sibor">4 Years Fixed</div>
                                <div class="num_percent">1.58%</div>
                            </div>
                            <div className="column__body__row">
                                <div class="sibor">5 Years Fixed</div>
                                <div class="num_percent">1.68%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Slider/>
                
            </div>
        </div>
    )
}

function Slider(props){
    
    return (
        <div className="slick-slider">
            <InnerSlide/>
        </div>
    )
}

function InnerSlide(props){
    return(
        <div className="slick-list">
            <Track/>
        </div>
    )
}

class Track extends React.Component{
    // state = {
    //     style: {},
    //     positionX: -972,
    // }

    // componentDidMount(){
    //     this.onInterval();    
    // }

    // componentWillUnmount(){
    //     clearInterval(this.Id);
    // }

    // changeX(e){
    //     this.setState({
    //         style: {
    //             transform: e,
    //         }
    //     })
    // }

    // Id(x){
    //     return x
    // }

    // onInterval(e){
    //     this.Id(setInterval(this.changeX(e), 10000)) ;
    // }



    render(){
        const length = imageList.length;
        let style = {
            transform: `translate3d(${-(length-4)*243}px, ${0}px, ${0}px)`
        }
        return (
            <div className="slick-track slick-track--active" >
                {imageList.map((slicker, index) => {
                    return(
                        <div id={"tabindex"+index} className="slick-track__slick">
                    
                            <img src={slicker.url} alt="" />
                        </div>
                    )
                })}
            </div>
    )}
}

export default Section1