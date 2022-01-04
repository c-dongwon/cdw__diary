import React, { useState } from 'react';

const Test6 = () => {
    const [ userid , setUserid ] = useState('')
    const [ userpw , setUserpw ] = useState('')

    const changeInput1 = (e)  => {
        const { value } = e.target 
        setUserid( value )
    }
    const changeInput2 = (e)  => {
        const { value } = e.target 
        setUserpw( value )
    }

    return (
        <div>
            <input type="text" onChange={changeInput1} value={userid} />
            <input type="text" onChange={changeInput2} value={userpw} />

            <button disabled={ userpw < 7 }> submit </button>

            {/*             
            {
                userpw.length > 6 ? 
                <button>submit</button>
                :
                <button disabled >submit</button>
            } */}
        </div>
    );
};

export default Test6;