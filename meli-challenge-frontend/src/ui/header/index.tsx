import React from 'react';
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
                <div className="ui-logo">
                    <img src={require('../../img/Logo_ML.png').default} alt="Mercado Libre Argentina" className="ui-logo" />
                </div>
                <SearchBox onSubmit={onSearchSubmit}/>
            </div>
        </header>
    )
}
