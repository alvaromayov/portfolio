import React from 'react';

function Cookies() {
    return (
        <div className="cookies">
            <div className="container">
                <div className="cookies__container">
                    <span className="p p--small p--white">This website uses cookies to ensure you get the best experience on our website. <a className="cookies__link" href="https://www.internetcookies.org/" target="_blank" rel="noopener noreferrer">Learn more</a></span>
                    <button className="button cookies__button">Got it!</button>
                </div>
            </div>
        </div>
    )
}

export default Cookies;