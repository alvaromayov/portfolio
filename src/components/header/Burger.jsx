import React, { Component } from 'react'

class BurgerButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    openMenu = () => {
        this.setState({
            isOpen: true
        })
    }

    closeMenu = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        if (this.state.isOpen) {
            return (
                <div className="burger-menu f-button--active" onClick={this.closeMenu}>
                    <span className="f-button"></span>
                    <span className="f-button"></span>
                    <span className="f-button"></span>
                    <span className="f-button"></span>
                    <span className="f-button"></span>
                </div>
            )
        } else {
            return (
                <div className="burger-menu" {...this.state.isOpen} onClick={this.openMenu}>
                    <span className="f-button"></span>
                    <span className="f-button"></span>
                    <span className="f-button"></span>
                    <span className="f-button"></span>
                    <span className="f-button"></span>
                </div>
            )
        }
    }
}
export default BurgerButton