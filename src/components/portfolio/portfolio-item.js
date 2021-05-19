import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class PortfolioItem extends Component{
    constructor(props) {
        super(props);

        this.state = {
            portfolioItemClass: ""
        };
    }
    //  Data that we'll need:
            //  - Background Image : thumb_image_url
            //  - Logo : logo_url
            //  - Description : description
            //  - ID (what we will use for the slug) : id
            //  In console, call Object.keys(item) to get item keys
            // ["id", "name", "description", "url", "category", "position", "thumb_image_url", "banner_image_url", "logo_url", "column_names_merged_with_images"]
handleMouseEnter() {
this.setState({portfolioItemClass: "image-blur"})
}

handleMouseLeave() {
this.setState({portfolioItemClass :""})
}

render() {
    const{ id, description, thumb_image_url, logo_url } = this.props.item
    return (
        <div className="portfolio-item-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        >


<div
className={"portfolio-img-background " + this.state.portfolioItemClass}
style={{
    backgroundImage: "url(" + thumb_image_url + ")"
}}
/>
    <div className="img-text-wrapper">
        <div className="logo-wrapper">
            <img src={logo_url} />
        </div>

        <div className="subtitle">
            {description}
        </div>
    </div>
        </div> 
    )
}}

// backticks allow us to do more modern string interpolation