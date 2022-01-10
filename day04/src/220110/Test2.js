import React, { useState } from 'react';

const Test2 = () => {
    const [data,setData] = useState([])
    const onAddConCat = () =>{
        setData(data.concat(
            {id:data.length,text:'concat' + Math.floor(Math.random() * 10)}
        ))
    }
    const onAdd = () =>{
        setData([
            ...data,
            {id:data.length,text:'홍길동' + Math.floor(Math.random() * 10)}
        ])
    }
    return (
        <div>
            <h2>데이터 추가예제</h2>
            <button onClick={onAddConCat}>추가</button>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id}/{item.text}</li>)
                }
            </ul>
        </div>
    );
};

export default Test2;