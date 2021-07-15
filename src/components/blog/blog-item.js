import React from "react";


const BlogItem = props => {

// the code below is the shorthand way of doing:
// const id = someObject.id
// const blog_status = someObject.blog_status

    const {
        id,
        blog_status,
        content,
        title,
        featured_image_url
    } = props.blogItem;

    return (
        <div>
            <h1>
                {title}
            </h1>
            <div>
                {content}
            </div>
            
        </div>
    )
}

export default BlogItem

// above is the same as below

// export default function BlogItem() {

// }