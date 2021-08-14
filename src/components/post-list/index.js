import React from "react";

import PostListItem from "../post-list-item";

import './post-list.css'

const PostList = ({posts, onDelete, onToggleElement}) => {

    const elements = posts.map(post => {
        const {id, ...itemProps} = post;
        return (
            <li key={post.id} className="list-group-item">
                <PostListItem 
                    {...itemProps}

                    onDelete={() => onDelete(post.id)}
                    onToggleImportant={()=>onToggleElement(post.id, 'important')}
                    onToggleLike={()=>onToggleElement(post.id, 'like')} 
                    />
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;