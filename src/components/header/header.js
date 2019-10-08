import React, { Component } from 'react'

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
            <nav className={"header " + this.state.isTop}>
                <div className="header__logo">Icon</div>
                <div className="header__links">
                    <a className="header__link" href="/">Home</a>
                    <a className="header__link" href="/">Blog</a>
                    <a className="header__link" href="/">Projects</a>
                    <a className="header__link" href="/">Contact</a>
                    <button onClick={this.scroll}>click</button>
                </div>
            </nav>
        )
    }
}

export default Header