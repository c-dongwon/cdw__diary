import React, { useState } from 'react';
import Test9Ani from './Test9Ani';
import Test9Display from './Test9Display';
import Test9Name from './Test9Name';

const Test9 = () => {
    const [name , setName] = useState('길동이')
    const [ani , setAni] = useState('고양이')

    const onName = (e) => {
        const { value }  =e.target 
        setName( value )
    }
    const onAni = (e) => {
        const { value }  =e.target 
        setAni( value )
    }

    return (
        <div>
            <Test9Name name={name} onName={onName} />
            <hr />
            <Test9Ani ani={ani} onAni={onAni } />
            <hr />
            <Test9Display name={name}  ani={ani} />
        </div>
    );
};

export default Test9;