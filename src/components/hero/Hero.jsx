import React from 'react';
import {ReactComponent as DownArrow} from '../../assets/icons/down-arrow.svg';

function Hero(props) {
    return (
        <section className="hero hero--dark">
            <div className="container">
                <div className="block">
                    <div className="hero__heading">
                        <h1 className="h1">{props.heading}</h1>
                        <h2 className="h2">{props.title}</h2>
                    </div>
                    <div className="hero__body">
                        <p className="p p--medium">{props.body}</p>
                        <div className="hero__scroll-link">
                            <span className="p p--small hero__link-text">Show me</span>
                            <DownArrow className="hero__down-icon hero__down-icon--white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;