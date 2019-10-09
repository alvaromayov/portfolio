import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../assets/logos/AM-logo.svg';


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
          if (isTop > 100) {
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
                <nav className={"header " + this.state.isTop}>
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <div className="header__links">
                        <a className="header__link" href="/">Home</a>
                        <a className="header__link" href="/">Blog</a>
                        <a className="header__link" href="/">Projects</a>
                        <a className="header__link" href="/">Contact</a>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header