import Swiper from 'react-id-swiper';

import React from 'react';
import Project from './Project';
import Button from '../shared/Button';

function Projects(props) {

    const params = {
        slidesPerView: 2,
        breakpoints: {
            1024: {
                slidesPerView: 3
            }
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      }

    return (
        <section className={`background--${props.background}`} id="projects">
            <div className="block">
                <div className="projects">
                    <div className="container">
                        <div className="projects__title">
                            <h2 className="projects__heading">Projects</h2>
                            <span className="projects__subheading">Check out some of the stuff I have built</span>
                        </div>
                        <Swiper {...params}>
                            <div><Project title="Weather App" description="This is the app I have made to check the weather" image="https://openweather.co.uk/storage/app/media/we-are-pleased-announce-our-new-statistical-weather-data-api-now-available.png" /></div>
                            <div><Project title="Weather App" description="This is the app I have made to check the weather" image="https://openweather.co.uk/storage/app/media/we-are-pleased-announce-our-new-statistical-weather-data-api-now-available.png" /></div>
                            <div><Project title="Weather App" description="This is the app I have made to check the weather" image="https://openweather.co.uk/storage/app/media/we-are-pleased-announce-our-new-statistical-weather-data-api-now-available.png" /></div>
                            <div><Project title="Weather App" description="This is the app I have made to check the weather" image="https://openweather.co.uk/storage/app/media/we-are-pleased-announce-our-new-statistical-weather-data-api-now-available.png" /></div>
                            <div><Project title="Weather App" description="This is the app I have made to check the weather" image="https://openweather.co.uk/storage/app/media/we-are-pleased-announce-our-new-statistical-weather-data-api-now-available.png" /></div>
                            <div><Project title="Weather App" description="This is the app I have made to check the weather" image="https://openweather.co.uk/storage/app/media/we-are-pleased-announce-our-new-statistical-weather-data-api-now-available.png" /></div>
                            <div><Project title="See all projects" description="Discover the rest of things I have worked on" image="" /></div>
                        </Swiper>
                        <Button color="blue" position="center" url="/"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects