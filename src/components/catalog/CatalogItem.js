import React from 'react';

const CatalogItem = (props) => {
    return (
        <div className='catalog-item'>
            <img src={props.hotel.img} alt={props.hotel.name} className='catalog-image'/>
            <h3>{props.hotel.name}</h3>
            <p>{props.hotel.description}</p>
            <p>Price: <strong>${props.hotel.price}</strong></p>
            <p>{props.hotel.city}</p>
            <button>Book now</button>
        </div>
    );
};

export default CatalogItem;
