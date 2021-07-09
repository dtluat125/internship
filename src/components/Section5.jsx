import { SliderData } from "./sliderData"
import React, { useState } from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
function Section5(props){
    return(
        <div className="section5">
            <h3>People Who Loves Us</h3>
            <div className="container">
                
                    <SliderTrack slides={SliderData}/>
                
            </div>

        </div>
    )
}

function SliderTrack(props){
    const [current, setCurrent] = useState(0);
    const length = props.slides.length;
    function nextSlide(){
        setCurrent(current === length - 1 ? 0:current+1)
    }

    function prevSlide(){
        setCurrent(current === 0 ? length - 1:current - 1)
    };
    const SlideItems = [];
    props.slides.map((item, index) =>{
        SlideItems.push(
            <div className={index === current? 'slide__item active':'slide__item'}>
                <div className="row clear-margin">
                    <div className="col-md-4 img-user" style={{backgroundImage: `url(${item.image})`}}></div>
                    <div className="col-md-8">
                        <div className="review-content">
                        <div className="auth">
                            <h5>{item.author}</h5>
                        </div>

                        <div className="content-x2">
                            <p>
                                {item.comment}
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="slider">
            <div className="row">
                <div className="col-md-1"></div>
                <div className =  "slider__list col-md-10">
                <InnerSlide length = {length} SlideItems = {SlideItems} current = {current} slides={props.slides}/>
            
                </div>
                <div className="col-md-1"></div>
            </div>
            <AiOutlineArrowLeft className="left-arrow" onClick={prevSlide}/>
            <AiOutlineArrowRight className="right-arrow" onClick={nextSlide}/>
        </div>
    )
}


function InnerSlide(props){
    return(
        <div className =  "slider-track--inner">
            {
                props.SlideItems.map((item, index) => {
                    if(index === props.current) return item
                    
                })
            }
        </div>
    )
}

export default Section5