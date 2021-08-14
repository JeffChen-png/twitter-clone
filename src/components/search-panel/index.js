import React from 'react';

import './search-panel.css'

export default class SearchPanel extends React.Component {

    state = {
        term: ''
    }

    onUpdateSearch = (event) => {
        const term = event.target.value;
        this.setState({term: term});
        this.props.onUpdateSearchTerm(term);
    }

    render () {
        return (
            <input 
                type="text" 
                className="form-control search-input"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        )
    }
}