import React from 'react'
import { Header } from '../../ui/header'
import { RouteComponentProps, withRouter } from 'react-router-dom';

const Home = (props: RouteComponentProps) => {

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


