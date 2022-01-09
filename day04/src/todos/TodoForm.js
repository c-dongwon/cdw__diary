import React, { useRef, useState } from 'react';
import './TodoForm.css'
const TodoForm = ({onAdd}) => {
    const [text,setText] = useState('')
    const textRef = useRef()
    const chInput = (e) =>{
        const {value} = e.target
        setText( value )
    }

    const onInsert = () =>{
        onAdd(text)
    }
    return (
        <div className='TodoForm'>
            <input type='text' onChange={chInput} value={text} ref={textRef} placeholder='입력하세요.'/>
            <button onClick={onInsert}>추가</button>
        </div>
    );
};

export default TodoForm;