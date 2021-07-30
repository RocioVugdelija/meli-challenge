import React from 'react'
import { Header } from '../../ui/header'
import { withRouter } from 'react-router-dom';

const Home = (props: any) => {

    const handleSearchSubmit = (value: string) => {
        props.history.push({ pathname: "/items", search: `?search=${value}` });
    };
    return (
        <div className="home">
            <Header onSearchSubmit={handleSearchSubmit}/>
        </div>
    )
}

export default withRouter(Home);


