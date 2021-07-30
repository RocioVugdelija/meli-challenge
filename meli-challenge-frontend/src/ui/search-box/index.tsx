import React, { useState } from 'react'
import './index.scss';

interface PropTypes {
    onSubmit: (value: string) => void;
}

export const SearchBox = (props: PropTypes) => {
    const { onSubmit} = props;
    const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

    const handleChange = (e: any) => {
        setSearchValue(e.target.value);
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (searchValue && searchValue.trim() !== ""){
            onSubmit(searchValue);
        }
    }
    return (
        <form className="ui-search">
            <input
                className="ui-search-input"
                type="text"
                placeholder="Nunca dejes de buscar"
                onChange={handleChange}
                aria-label="Ingresá lo que quieras encontrar"
            />
            <button
                className="ui-search-btn"
                aria-label="Buscar"
                type="submit"
                onClick={handleSubmit}
            >
                <img src={require('../../img/ic_Search.png').default} alt="Buscar" className="ui-icon-search" />
            </button>
      </form>
    )
}
