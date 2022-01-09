import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css'

const datalist = [
    {id:1,text:'운동'},
    {id:2,text:'탁구'},
    {id:3,text:'독서'},
    {id:4,text:'밥'},
    {id:5,text:'산책'},
]

const Todos = () => {
    const [data,setData] = useState(datalist)
    const onDel = (id) =>{
        //id : 매개변수
        setData(data.filter(item => item.id !== id))
    }
    const no = useRef(6)
    const onAdd = (text) =>{
        setData([
            ...data,
            {id:no.current++, text:text}
        ])
    }
    return (
        <div className='Todos'>
            <h1>TodoList</h1>
            <TodoForm onAdd={onAdd}/>
            <TodoList data={data} onDel={onDel}/>
        </div>
    );
};

export default Todos;