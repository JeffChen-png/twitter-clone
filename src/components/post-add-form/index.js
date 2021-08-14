import React from "react";

import './post-add-form.css'

const PostAddForm = ({onAdd}) => {
    return (
        //onSubmit={onAdd} 
        <div className="bottom-panel d-flex" action=""> 
            <input className="form-control new-post-label" type="text" name="" id="" placeholder="О чем вы думаете сейчас ?" />
            <button onClick={() => onAdd('Hello')} className="btn btn-outline-secondary">Добавить</button>
        </div>
    )
}

export default PostAddForm;