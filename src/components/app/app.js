import React from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list';
import PostAddForm from '../post-add-form/';

import './app.css'

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data : [
    //             {label: 'Going to learn React', important: true, id: 1},
    //             {label: 'That is so good', important: false, id: 2},
    //             {label: 'I need a break...', important: false, id: 3}
    //         ]
    //     };

    //     this.deleteItem = this.deleteItem.bind(this);
    // }

    // deleteItem(id) {
    //     this.setState(({data}) => {
    //         const index = data.findIndex((elem) => elem.id === id);

    //         data.splice(index, 1);
    //         return {
    //             data: data
    //         }
    //     });
    // }

    state = {
        data: [
            {
                label: "Going to learn React",
                important: true,
                like: false,
                id: 1
            },
            {
                label: "Going to learn Javascript",
                important: false,
                like: false,
                id: 2
            },
            {
                label: "Going to learn HTML, CSS",
                important: false,
                like: false,
                id: 3
            }
        ],
        term: '',
        filter: 'all'
    }

    addItem = (body) => {
        this.setState(state => {
            const newItem = {
                label: body,
                important: false,
                id: this.state.data.length + 1
            }

            const newData = [...this.state.data, newItem];
            return {
                data: newData
            }
        });
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            const dataChanged = [...data.slice(0, index), ...data.slice(index + 1)]
            return {
                data: dataChanged
            }
        })
    }

    onToggleElement = (id, changeElement) => {
        this.setState(state => {
            const index = state.data.findIndex(element => element.id === id);
            let newObj;
            if (changeElement === 'like') {
                newObj = { ...state.data[index], like: !(state.data[index].like)};
            }
            else if (changeElement === "important") {
                newObj = { ...state.data[index], important: !(state.data[index].important)};
            }

            const newData = [...state.data.slice(0, index), newObj, ...state.data.slice(index + 1)];

            return { data: newData }
        })
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter((item)=>{
            return (
                item.label.indexOf(term) > -1
            )
        })
    }

    onUpdateSearchTerm = (term) => {
        this.setState({term: term})
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onFliterSelect = (filter) => {
        this.setState({filter: filter})
    }

    render() {

        const liked = this.state.data.filter(elem => elem.like).length;
        const allPosts = this.state.data.length;

        const visiblePosts = this.filterPost(this.searchPost(this.state.data, this.state.term), this.state.filter);

        return (
            <AppBlock>
                <AppHeader liked={liked} allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel 
                    onUpdateSearch={this.onUpdateSearchTerm}/>
                    <PostStatusFilter 
                    filter={this.state.filter}
                    onFilterSelect={this.onFliterSelect}/>
                </div>
                <PostList posts={visiblePosts} onDelete={this.deleteItem} onToggleElement={this.onToggleElement} />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </AppBlock>
        )
    }
}