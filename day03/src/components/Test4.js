import React, { useState } from 'react';

const Test4 = () => {
    const [ isChecked , setIsChecked ] = useState( false )

    const changeInput = (e) => {
        const { checked } = e.target 
        setIsChecked( checked )
    }

    return (
        <div style={{ color: isChecked ? 'red':'#000'}}>
            <input type="checkbox" onChange={changeInput } checked ={ isChecked } />
            오늘은 일요일 입니다. 
        </div>
    );
};

export default Test4;