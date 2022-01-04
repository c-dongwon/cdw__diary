import React,{ useState } from 'react';

const Test8 = () => {

    const [ count, setCount] = useState(1)

    const increment = () =>{
      setCount(count + 1)
    }
    const decrememt = () =>{
        setCount(count - 1)
    }
    const increment1 = () =>{
        // setCount( 이전값 => 이전값 + 1)
        setCount( state => state + 1 )
        setCount( count => count + 1 )
      }
      const decrememt1 = () =>{
          setCount(count => count - 1)
          setCount(state => state - 1)
      }
      const increment2 = () =>{
        for(let i = 0; i < 5; i++){
            setCount( prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            <h2>숫자:{count}</h2>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrememt}>감소</button>
            </p>
            <p>
                <button onClick={increment1}>2증가</button>
                <button onClick={decrememt1}>2감소</button>
            </p>
            <p>
                <button onClick={increment2}>5증가</button>
            </p>
        </div>
    );
};

export default Test8;