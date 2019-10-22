import React, { Component } from 'react';
import {ReactComponent as DownArrow} from '../../assets/icons/down-arrow.svg';
import zenscroll from 'zenscroll';

class Hero extends Component {

    scroll() {
        zenscroll.setup(null, 60);
        const nextSection = document.querySelector('#next-section');
        zenscroll.to(nextSection);
    }

    render() {
        return (
            <section className="hero hero--dark">
                <div className="container">
                    <div className="block">
                        <div className="hero__heading">
                            <h1 className="h1">{this.props.heading}</h1>
                            <h2 className="h2">{this.props.title}</h2>
                        </div>
                        <div className="hero__body">
                            <p className="p p--medium">{this.props.body}</p>
                            <div className="hero__scroll-link" onClick={this.scroll}>
                                <span className="p p--small hero__link-text">Show me</span>
                                <DownArrow className="hero__down-icon hero__down-icon--white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;