import React, { useRef, useState } from 'react';

const Item = ({item,onDel}) => {
    const {id,text} = item
    return (
        <li>
               번호:{id} / 내용:{text}
               <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

const List = ({data,onDel}) => {
    return (
        <ul>
           {
               data.map(item => <Item key={item.id} item={item} onDel={onDel}></Item>)
           } 
        </ul>
    );
};

const Form = ({onAdd}) => {
    const [text,setText] = useState('')
    const chInput = (e) =>{
        const {value} = e.target
        setText(value)
    }
    const onInsert = () =>{
        onAdd(text)
    }
    return (
        <div>
            <input type='text' value={text} onChange={chInput}/>
            <button onClick={onInsert}>추가</button>
        </div>
    );
};

const Test6 = () => {
    const [data,setData] = useState([
        {id:1,text:'퇴근하기'},
        {id:2,text:'공부하기'},
        {id:3,text:'밥먹기'},
        {id:4,text:'영화보기'},
        {id:5,text:'독서하기'},
    ])
    const onDel = (id) =>{
        setData(data.filter(item => item.id !== id))
    }
    const no = useRef(6)
    const onAdd = ( text ) =>{
        setData([
            ...data,
            {id:no.current++, text:text}
        ])
    }
    return (
        <div>
            <Form onAdd={onAdd}/>
            <hr/>
            <List data={data} onDel={onDel}/>
        </div>
    );
};

export default Test6;