import React from 'react'
import './index.scss';

interface PropTypes {
    categories?: string[]
}



export const Breadcrumb = ({categories}: PropTypes) => {
    const isLastCategory = (index: number) => (
        categories && index === (categories.length-1)
    );
    const greaterThan = ">";

    return (
        <div className="ui-breadcrumb">
            {categories && categories.map((c,index) => {
                return (
                    <span>
                        <span className={isLastCategory(index)? "last-category" : "category" }>{c} </span>
                        {!isLastCategory(index) && (
                            <span>{greaterThan}</span>
                        )}
                    </span>

                )
            })}
        </div>
    )
}
