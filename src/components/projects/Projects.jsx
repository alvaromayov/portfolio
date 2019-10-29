import React from 'react';
import Project from './Project';

function Projects() {

    return (
        <section>
            <div className="block">
                <div className="projects">
                    <div className="container">
                        <div className="projects__title">
                            <h2 className="projects__heading">Projects</h2>
                            <span className="projects__subheading">Check out some of the stuff I have built</span>
                        </div>
                        <div className="projects__list">
                            <Project title="Weather App" description="This is the app I have made to check the weather" image="12" />
                            <Project title="Weather App" description="This is the app I have made to check the weather" image="https://openweather.co.uk/storage/app/media/we-are-pleased-announce-our-new-statistical-weather-data-api-now-available.png" />
                            <Project title="Weather App" description="This is the app I have made to check the weather" image="https://openweather.co.uk/storage/app/media/we-are-pleased-announce-our-new-statistical-weather-data-api-now-available.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects