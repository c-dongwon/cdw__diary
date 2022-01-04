import React, { useState } from 'react';

const Name = () => {
    const [ text , setText ] = useState('')
    return (
        <div>
            <h2>Name 컴포넌트</h2>
            <label>이름 :</label>
            <input type="text" value={text} onChange={ e => setText( e.target.value )}/>
            <span style={{marginLeft:10}}>{text} </span>
        </div>
    );
};

const Animail = ({ ani , changeInput }) => {
    return (
        <div>
            <h2>Animail 컴포넌트</h2>
            <label>동물 :</label>
            <input type="text" value={ani} onChange={ changeInput }/>
            <span style={{marginLeft:10}}>{ani} </span>
        </div>
    );
};

const Display = ({ ani }) => {
    return (
        <div>
            <h2>Display 컴포넌트</h2>
            <h1>내가 좋은하는 동물은 {ani} 입니다. </h1>
        </div>
    );
};
const Test8 = () => {
    const [ ani , setAni ] = useState('고양이')

    const changeInput = (e)  => {
        const { value } = e.target 
        setAni( value )
    }

    return (
        <div>
            <Name />
            <hr/>
            <Animail ani={ani} changeInput={changeInput} />
            <hr />
            <Display ani={ani} />          
        </div>
    );
};

export default Test8;