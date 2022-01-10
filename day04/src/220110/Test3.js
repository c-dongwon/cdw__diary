import React, { useRef, useState } from 'react';

const Test3 = () => {
    const [data,setData] = useState([])
    const names = '홍길동1,홍길동2,홍길동3,홍길동4,홍길동5'.split(',')
    const no =useRef(1)
    const onAdd = () =>{
        const ran = Math.floor(Math.random() * 5)
        setData([
            ...data,//꼭가져올것!
            {id:no.current++,text:names[ran]}
        ])
    }
    return (
        <div>
            <h2>split을 활용해서 data를 추가해보자!</h2>
            <button onClick={onAdd}>추가</button>
            {
                data.map(item => <p key={item.id}>{item.id}/{item.text}</p>)
            }
        </div>
    );
};

export default Test3;
