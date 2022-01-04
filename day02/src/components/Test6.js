import React from 'react';
import { useState } from 'react/cjs/react.development';

const Test6 = () => {
    const [ bgcolor, setBgcolor] = useState('pink');
    const onColor = () =>{
        setBgcolor( bgcolor === 'pink' ? 'tomato':'pink')
    }
    return (
        <div>
            <p>문제:h1클릭시 배경색 바꾸기</p>
            <h1 onClick={onColor} style={{border:'1px solid #000',padding:20,margin:10,
            backgroundColor:bgcolor,cursor:'pointer'}}>
                배경색 : {bgcolor}
                </h1>
        </div>
    );
};

export default Test6;