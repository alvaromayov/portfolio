import React from 'react'

function Header() {
    return (
        <nav className="header">
            <div className="header__logo">Icon</div>
            <div className="header__links">
                <a className="header__link" href="/">Home</a>
                <a className="header__link" href="/">Blog</a>
                <a className="header__link" href="/">Projects</a>
                <a className="header__link" href="/">Contact</a>
            </div>
        </nav>
    )
}

export default Header