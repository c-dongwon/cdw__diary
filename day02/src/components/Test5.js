import React, { useState } from 'react';

const Test5 = () => {
    const [ name, setName ] = useState('');
    const [ color,setColor] = useState('');

    const onName1 = () => {
        //setter(값,수식)
        setName('송혜교')
    }
    const onName2 = () => {
         setName('유재석')
    }
    const onName3 = () => {
        setName('강호동')
    }
    return (
        <div>
            <h2 style={{color:color}}>이름 {name}/컬러 {color}</h2>
            <p>
              <button onClick={onName1}>송혜교</button>
              <button onClick={onName2}>유재석</button>
              <button onClick={onName3}>강호동</button>
            </p>
            <p>
              <button onClick={() => setColor('pink')}>pink</button>
              <button onClick={() => setColor('red')}>red</button>
              <button onClick={() => setColor('blue')}>blue</button>
            </p>
        </div>
       
    );
};

export default Test5;

/*
     useState : 값이 유동으로 변할때

     import React, {useState} from 'react';
     const [변수, 함수] = useState(초기값);
     const [변수, 함수] = React.useState(초기값);
     const [상태데이터, 상태데이터를변경도와주는함수] = useState(초기값);
     const [상태데이터, 상태를 위한 setter함수] = useState(초기값);

     초기값 : 문자,숫자,{},[]
     const [A,b] = useState(0);
     A=0
     A = B(10) => A = 10

    const [abc,setAbc] = useState(0);

*/