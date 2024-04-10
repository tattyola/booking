import React from 'react';
import CatalogItem from "./CatalogItem";

const Catalog = (props) => {
    return (
        <div className='catalog-wrapper'>
            {props.hotels.map(el => (
                <CatalogItem
                    hotel={el}
                    key={el.id}
                />
            ))}
        </div>
    );
};

export default Catalog;
