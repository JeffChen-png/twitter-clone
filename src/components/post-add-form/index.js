import React from "react";

import './post-add-form.css'

export default class PostAddForm extends React.Component {

    state = {
        text: ''
    }

    onValueChange = (event) => {
        this.setState({
            text:event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }

    render (){
        return (
            //onSubmit={onAdd} 
            <form 
                className="bottom-panel d-flex" 
                action=""
                onSubmit={this.onSubmit}> 
                <input 
                    className="form-control new-post-label" 
                    type="text" 
                    name=""
                    id="" 
                    placeholder="О чем вы думаете сейчас ?"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button 
                    className="btn btn-outline-secondary">
                    Добавить
                </button>
            </form>
        )
    }
}
