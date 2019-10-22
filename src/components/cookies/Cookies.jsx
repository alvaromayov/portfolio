import React, { Component } from 'react';
import Cookies from 'js-cookie';

class CookiesBanner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cookies:''
        }
    }

    componentDidMount() {
        setTimeout(() => {
            if(!Cookies.get("acknowledged", "true")) {
                this.setState({
                    cookies: '--not-accepted'
                })
            }
        },9000);
        
    }

    activateCookies = () => {
        Cookies.set("acknowledged", "true");
        this.setState({
            cookies: ""
        })
    }

    render() {
        return (
            <div className={`cookies${this.state.cookies}`}>
                <div className="container">
                    <div className="cookies__container">
                        <span className="p p--small p--white">This website uses cookies to ensure you get the best experience on our website. <a className="cookies__link" href="https://www.internetcookies.org/" target="_blank" rel="noopener noreferrer">Learn more</a></span>
                        <button className="button cookies__button" onClick={this.activateCookies}>Got it!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CookiesBanner;