import React, { useState } from 'react';
import coffedata from '../assets/api/coffedata'
import Menu from './Menu'
import CoffeList from './CoffeList'
import './style.css'

// const menuList =['all','coldbrew','espresso','frappuccino','fizzio']
const menuList =['all',...new Set(coffedata.map(item => item.name))]//set으로 coffedata 호출
const Starbucks = () => {
    const [data,setData] = useState(coffedata)
    const onView = (name) =>{
        if( name === 'all'){
            setData(coffedata)
            //all이면 offedata 원상복구
        }else{
            setData(coffedata.filter(item => item.name === name))
            //offedata -> name 값이랑 일치하는거빼고 제거
        }
    }
    return (
        <div className='wrap'>
            <Menu menuList={menuList} onView={onView}/>
            <CoffeList data={data}/>
        </div>
    );
};

export default Starbucks;