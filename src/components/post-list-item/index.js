  
import React from 'react';

import './post-list-item.sass';

export default class PostListItem extends React.Component {

    render() {
        const {label, onDelete, onToggleImportant, onToggleLike, important, like} = this.props;
        
        let classNames = "app-list-item d-flex justify-content-between";

        if (!important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span onClick={onToggleLike} className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={onToggleImportant} className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" onClick={onDelete} className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}

