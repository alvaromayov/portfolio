import React, { Component } from 'react'
import MobileMenu from './MobileMenu';

class BurgerButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            mobileMenu: "--not-open"
        }
    }

    openMenu = () => {
        this.setState({
            isOpen: true,
            mobileMenu: "--active"
        })
    }

    closeMenu = () => {
        this.setState({
            isOpen: false,
            mobileMenu: "--not-active"
        })
    }

    render() {
        if (this.state.isOpen) {
            return (
                <div>
                    <div className="burger-menu f-button--active" onClick={this.closeMenu}>
                        <span className="f-button"></span>
                        <span className="f-button"></span>
                        <span className="f-button"></span>
                        <span className="f-button"></span>
                        <span className="f-button"></span>
                    </div>
                    <MobileMenu data={this.state.mobileMenu}/>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="burger-menu" onClick={this.openMenu}>
                        <span className="f-button"></span>
                        <span className="f-button"></span>
                        <span className="f-button"></span>
                        <span className="f-button"></span>
                        <span className="f-button"></span>
                    </div>
                    <MobileMenu data={this.state.mobileMenu}/>
                </div>
            )
        }
    }
}
export default BurgerButton