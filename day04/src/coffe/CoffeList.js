import React from 'react';
import CoffeItem from './CoffeItem'

const CoffeList = ({data}) => {
    return (
        <ul className='list'>
           {
               data.map(item => <CoffeItem key={item.id} item={item}/>)
           } 
        </ul>
    );
};

export default CoffeList;