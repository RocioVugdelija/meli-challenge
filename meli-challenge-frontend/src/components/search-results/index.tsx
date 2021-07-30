import React, { useContext, useEffect } from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';
import { Header } from '../../ui/header';
import { ItemsResultsContext } from '../../context/itemsResultsContext/ItemsResultsContext';
import ItemResult  from './item-result';
import './index.scss';
import { Breadcrumb } from '../../ui/breadcrumb';

const SearchResults = (props: any) => {
    const { cleanItems, cleanCategories, getItemsResults, categories, errorMessage, items } = useContext( ItemsResultsContext );

    const handleSearchSubmit = (value: string) => {
        props.history.push({ pathname: "/items", search: `?search=${value}` });
    };
    const location = useLocation();

    const searchItems = async () => {
        let searchValue = getSearchQueryValue();

        if (!searchValue) {
           return props.history.push({ pathname: "/" });
        };
        getItemsResults(searchValue);
    };

    useEffect(() => {
        searchItems();
    }, [location.search]);

    useEffect(() => {
        return () => {
            cleanItems();
            cleanCategories();
        };
    }, []);

    const getSearchQueryValue = () => {
        const urlParams = new URLSearchParams(location.search);
        const searchValue = urlParams.get("search");
        return searchValue;
    }

    return (
        <>
            <Header onSearchSubmit={handleSearchSubmit}/>
            <Breadcrumb categories={categories} />
            <div className="items-container">
                { items ? items.map((i) => {
                    return(
                    <Link 
                        key={i.id}
                        to={{ pathname: `/items/${i.id}`, state: { data: i } }}
                        >
                        <ItemResult item= {i}/>
                    </Link>)
                }) :
                    errorMessage && (
                        <h3> No hay publicaciones que coincidan con tu búsqueda </h3>
                    )
                }
            </div>
        </>
    )
}

export default withRouter(SearchResults);
