import React from 'react';

const TodoItem = ({item,onDel}) => {
    const {id, text} = item
    return (
        <li>
            <span>&#10003;</span>
            <em>{text}</em>
            <button onClick={() => onDel(id)}>삭제</button>
            {/* onClick={() => onDel(id)} 키값:id */}
        </li>
    );
};

export default TodoItem;