import React, { useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { Header } from '../../ui/header'
import { ItemDetailsContext } from '../../context/itemDetailsContext/ItemDetailsContext';

import './index.scss';
import getSymbolFromCurrencyCode from '../utils/currency';
import { Button } from '../../ui/button';
import { Breadcrumb } from '../../ui/breadcrumb';

const ItemDetails = (props: any) => {
    const { cleanItem, cleanCategories, errorMessage , getItemDetails, categories, item } = useContext( ItemDetailsContext );

    const redirectToSearchBox = () => {
        return props.history.push({ pathname: "/" });
    }

    const searchItem = async () => {
        const id = props.match.params.id;
        if (!id) {
           return redirectToSearchBox();
        };
        getItemDetails(id);
    };


  
    useEffect(() => {
      searchItem();
    }, [props.match.params.id]);

    useEffect(() => {
        if (errorMessage !== "") {
            return redirectToSearchBox();
        };
      }, [errorMessage]); 
    
    useEffect(() => {
        return () => {
            cleanItem();
            cleanCategories();
        };
    }, []);
    const handleSearchSubmit = (value: string) => {
        props.history.push({ pathname: "/items", search: `?search=${value}` });
    };

    const getFormattedPrice = (price: number ): string => (price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'))

    const handleClick = () => {
        alert("Not Implemented");
    }

    return (
        <div>
            <Header onSearchSubmit={handleSearchSubmit}/>
            <Breadcrumb categories={categories} />
            {item
                && (
                <div className="item-container"> 
                    <div className="item-data">
                        <div className="item-image">
                            <img src={item.picture} alt="product" />
                        </div>
                        <div className="item-info">
                            <span className="item-condition">{item.condition === "new" ? "Nuevo " : "Usado"} - {item.sold_quantity} vendidos</span>
                            <h3 className="item-name">{item.title}</h3>
                            <span className="price-container">
                                <span className="price">
                                    {getSymbolFromCurrencyCode(item.price.currency)} {getFormattedPrice(item.price.amount)}
                                </span>
                                <span className="price-decimals">
                                    {item.price.decimals || "00"}
                                </span>
                            </span>
                            <Button onClick={handleClick} text="Comprar" />
                        </div>
                    </div>
                    <div className="item-description">
                        <h3>Descripción del producto</h3>
                        {item.description}
                    </div>
                </div>)
            }
        </div>
    )
}

export default withRouter(ItemDetails);
