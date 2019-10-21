import React, { Component } from 'react';
import Link from './Link';

class MobileMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: null,
        }
    }
    
    render() {
        return(
            <section className={`header__mobile header__mobile${this.props.data}`}>
                <Link />
            </section>
        )
    }
}

export default MobileMenu