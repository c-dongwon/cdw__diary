import React from 'react';

const CoffeItem = ({item}) => {
    const {id,title,price,name,img,desc} =item//비구조할당
    return (
        <li>
            <img src={img} alt={title}/>
            <h2>{name}</h2>
            <h3>{title}</h3>
            <p>가격:{price}</p>
            <p>설명:{desc}</p>
        </li>
    );
};

export default CoffeItem;