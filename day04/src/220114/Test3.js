import React, { useRef, useState } from 'react';

const Test3 = () => {
    const [data,setData] = useState([])
    const names = 'name1/name2/name3/name4/name5'.split('/')
    const no = useRef(1)
    const onAdd = () =>{
        const ran = Math.floor(Math.random()*5)
        setData([
            ...data,
            {
                id:no.current++,
                text:names[ran]
            }
        ])
    }
    return (
        <div>
            <h2>split 데이터 추가</h2>
            <button onClick={onAdd}>추가</button>
            <hr/>
            {
                data.map(item => <p key={item.id}>{item.id}/{item.text}</p>)
            }
        </div>
    );
};

export default Test3;