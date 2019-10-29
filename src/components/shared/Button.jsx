import React from 'react';

function Button(props) {
    
    return(
        <div className={`button--${props.position}`}>
            <a href={`${props.url}`} className={`projects__button button button__ ${props.color}`}>See all projects</a>
        </div>
    )
}

export default Button;