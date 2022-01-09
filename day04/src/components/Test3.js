import React, { useRef, useState } from 'react';

const Test3 = () => {
    const no = useRef(1)
    //고유번호 처리
    const [data,setData] = useState([])
    const names = '홍길동,홍길동1,홍길동2,홍길동3,홍길동4,홍길동5,홍길동6,홍길동7,홍길동8,홍길동9,홍길동10'.split(',')
    //split(',') = 문자열 배열로 변환

    const onAdd= () =>{
       const ran = Math.floor(Math.random() * names.length)
       setData([
           ...data,
           {
               id:no.current ++ ,
               text:names[ran]
           }
       ])
    }
    return (
        <div>
            <button onClick={onAdd}>추가</button>
            <hr/>
            {
                data.map(item => <p key={item.id}>
                    {item.id}/{item.text}
                </p>)
            }
        </div>
    );
};

export default Test3;