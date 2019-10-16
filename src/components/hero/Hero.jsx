import React from 'react';

function Hero(props) {
    return (
        <section className="hero hero--dark">
            <div className="container">
                <div className="block">
                    <h1 className="h1">{props.heading}</h1>
                    <h2 className="h2">{props.title}</h2>
                    <div className="hero__body">
                        <p className="p p--medium">{props.body}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;