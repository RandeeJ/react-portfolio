import React from "react";
import { Link } from "react-router-dom";


export default function(props) {
    //  Data that we'll need:
            //  - Background Image : thumb_image_url
            //  - Logo : logo_url
            //  - Description : description
            //  - ID (what we will use for the slug) : id
            //  In console, call Object.keys(item) to get item keys
            // ["id", "name", "description", "url", "category", "position", "thumb_image_url", "banner_image_url", "logo_url", "column_names_merged_with_images"]

    const{ id, description, thumb_image_url, logo_url } = props.item
    return (
        <div>
    <div> {description} </div>
    <Link to={`/portfolio/${id}`}> Link </Link>
            </div> 
    )
}

// backticks allow us to do more modern string interpolation