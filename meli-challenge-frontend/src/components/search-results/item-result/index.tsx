import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ItemResult as ItemResultType } from '../../../interfaces/ItemsResponsesInterfaces';
import getSymbolFromCurrencyCode from '../../utils/currency';

import './index.scss';

interface PropTypes extends RouteComponentProps{
    item: ItemResultType;
}

const ItemResult = (props: PropTypes) => {

    const { item } = props;

    const price = item.price.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    const getFormattedDecimals = (decimals?: number) => {
        return (decimals && decimals < 10? `0${decimals}`: decimals);
    }

    return (
        <div className="item-result">
            <div className="item-data">
                <div className="item-image">
                    <img src={item.picture} alt="product" />
                </div>
                <div className="item-info">
                    <span className="price">
                        {getSymbolFromCurrencyCode(item.price.currency)} {price}
                        <span className="price-decimals">
                            {getFormattedDecimals(item.price.decimals)}
                        </span>
                        {item.free_shipping && (
                            <img src={require('../../../img/ic_shipping.png').default} class-name= "free shipping" alt="free shipping" />
                        )}
                    </span>
                    <span className="item-name">{item.title}</span>
                </div>
            </div>
            <div className="item-adress_state">{item.adress_state}</div>
      </div>
    );
}

export default withRouter(ItemResult);