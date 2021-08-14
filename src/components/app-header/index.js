import React from 'react';

import './app-header.css'

import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'gray':'black'};
        transition: 0.5s all;
        :hover {
            font-size: 30px;
        }
    }

    h2 {
        font-size: 1.2rem;
        color: grey;
        transition: 0.5s all;
        :hover {
            font-size: 1.3rem;
        }
    }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header colored>
			<h1>Medvedev Rustam</h1>
			<h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader