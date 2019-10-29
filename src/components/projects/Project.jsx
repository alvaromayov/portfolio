import React, { Component } from 'react';

class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test: 'true'
        }
    }
    render() {
        return (
            <div className="project">
                <div className="project__image-container">
                    <img className="project__image" src={this.props.image} alt=""/>
                </div>
                <div className="project__title">
                    <span className="project__heading">{this.props.title}</span>
                    <span className="project__subheading">{this.props.description}</span>
                </div>
            </div>
        )
    }
}

export default Project;