import React, { useState } from "react";

let PostItem = (props) => {

    return (
        <div className="post">
            <div className="post__contend">
                <strong>{props.post.id}{props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <button>удалить</button>
            </div>
        </div>
    )
}

export default PostItem;