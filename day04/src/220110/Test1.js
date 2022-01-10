import React, { useState } from 'react';
import Test1Sub from './Test1Sub';

const Test1 = () => {
    const [data,setData] = useState([
        {id:1,name:'김다미'},
        {id:2,name:'최우식'},
        {id:3,name:'송혜교'},
        {id:4,name:'김도윤'},
        {id:5,name:'유재석'},
    ])
    const onDel =(id)  =>{
        setData(data.filter(item => item.id !== id))
    }
    const onMod = (id) =>{
        setData(data.map(item => item.id === id ? {...item,name:'이름바뀜'} : item))
    }
    return (
        <div>
            <ul>
                <Test1Sub onDel={onDel} onMod={onMod}/>
                {
                    data.map(item => <li key={item.id}>{item.id}/{item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Test1;