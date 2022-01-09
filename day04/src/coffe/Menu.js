import React from 'react';
import MenuItem from './MenuItem'
const Menu = ({menuList,onView}) => {
    return (
        <ul className='menu'>
            {
                menuList.map( (item,index) => <MenuItem key={index} item={item}  onView={onView}/>)
                //item={item} 하위 프롭스에 전달
            } 
        
        </ul>
    );
};

export default Menu;