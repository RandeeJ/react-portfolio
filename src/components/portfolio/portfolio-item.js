import React from "react";
import { Link } from "react-router-dom";


export default function(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>

<Link to={`/portfolio/${props.slug}`}> Link </Link>
            </div> 
    )
}

// backticks allow us to do more modern string interpolation