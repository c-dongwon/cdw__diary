import React, { useState } from 'react';
import './Test1.css'

const Test1 = () => {
    const [ age , setAge ] = useState(20)
    const [ isColor , setIsColor ] = useState( false )

    const onAge = ()  => {
        // setAge( age - 1 )
        setAge( prevAge => prevAge - 1 )
    }

    const onToggle = ()=> {
        setIsColor( !isColor )
    }

    return (
        <div className={`wrap ${isColor ? 'pink':'tomato'}`}>
            <h2> background-color: {isColor ? 'pink':'tomato'} </h2>
            <h2> 나이 : {age} </h2>
            <p>
                <button onClick={ onToggle }>배경색바꾸기</button>
                <button onClick={() => setAge( age + 1 )}>증가</button>
                <button onClick={ onAge }>감소</button>
            </p>
        </div>
    );
};

export default Test1;