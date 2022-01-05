import React from 'react';
import Testimonial from './Testimonials';
import Intro from './Intro.js';
import Service from './Services';
import ImageSlider from '../slider_img/slider_img';
import { SliderData } from '../slider_img/SliderData';
export default function Home (){

        return (
            <div className="homePageContainer">
                <Intro />
                <Service />
                <ImageSlider slides={SliderData} />
                <Testimonial />
            </div>
        )
    }
