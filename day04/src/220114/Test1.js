import React, { useState } from 'react';

const Test1 = () => {
   const [data,setData] = useState([
       {id:1,name:'name1'},
       {id:2,name:'name2'},
       {id:3,name:'name3'},
       {id:4,name:'name4'},
       {id:5,name:'name5'},
   ])  
   const onDel = (id) =>{
       setData(
           data.filter(item => item.id !== id)
       )
   }
   const onAdd = (id) =>{
       setData(
        data.map(item => item.id === id ? {...item,name:'변경'} : item)
       )
    
   }
    return (
        <div>
            <h2>삭제</h2>
            <p>
                <button onClick={() => onDel(1)}>name1</button>
                <button>name2</button>
                <button>name3</button>
                <button>name4</button>
            </p>
            <h2>수정</h2>
            <p>
                <button onClick={() => onAdd(1)}>name1</button>
                <button>name2</button>
                <button>name3</button>
            </p>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id}/{item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Test1;