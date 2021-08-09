import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBox } from '../search-box';
import './index.scss';

interface PropTypes {
    onSearchSubmit: (value: string) => void;
}


export const Header = (props: PropTypes) => {
    const { onSearchSubmit } = props;

    return (
        <header className="ui-header">
            <div className="ui-header-content">
                <Link to="/">
                    <div className="ui-logo">
                        <img src={require('../../img/Logo_ML.png').default} alt="Mercado Libre Argentina" className="ui-logo" />
                    </div>
                </Link>
                <SearchBox onSubmit={onSearchSubmit}/>
            </div>
        </header>
    )
}
