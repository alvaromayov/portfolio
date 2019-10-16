import React, { Component } from 'react';

import { ReactComponent as Logo } from '../../assets/logos/AM-logo.svg';
import BurgerButton from './Burger';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            positionY: null,
            isTop: "header--top"
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY;
          if (isTop > 1) {
              this.setState({
                  isTop: "header--not-top"
              })
            } else {
                this.setState({
                    isTop: "header--top"
                })
            }
            console.log(this.state.isTop)
        });
      }

    render() {
        return(
            <header>
                <nav className={"header header__container " + this.state.isTop}>
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <div className="header__links">
                        <a className="header__link" href="/">Home</a>
                        <a className="header__link" href="/">Blog</a>
                        <a className="header__link" href="/">Projects</a>
                        <a className="header__link" href="/">Contact</a>
                    </div>
                    <BurgerButton />
                </nav>
            </header>
        )
    }
}

export default Header