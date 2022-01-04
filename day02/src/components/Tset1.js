import React from 'react';

// const Tset1Sub = ( props ) => {
//     return (
//         <div>
//             <h2>자식 컴포넌트</h2>
//             <h3> {props.name}({typeof props.name}) </h3>
//             <h3>나이 : {props.age} ({typeof props.age})</h3>
//             <hr/>
//         </div>
//     );
// };

// const Tset1Sub = ( props ) => {
//     //비구조할당, 구조분해
//     const {name,age} = props

//     return (
//         <div>
//             <h2>자식 컴포넌트</h2>
//             <h3> {name}({typeof name}) </h3>
//             <h3>나이 : {age} ({typeof age})</h3>
//             <hr/>
//         </div>
//     );
// };

const Tset1Sub = ({name,age}) => {
    //비구조할당, 구조분해
   
    return (
        <div>
            <h2>자식 컴포넌트</h2>
            <h3> {name}({typeof name}) </h3>
            <h3>나이 : {age} ({typeof age})</h3>
            <hr/>
        </div>
    );
};

const Tset1 = () => {
    const data1 = {name:'강아지',age:4}
    const data2 = {name:'고양이',age:2}
    return (
        <div>
            <h2>컴포넌트</h2>
            {/* 
                부모컴포넌트에서 자식 컴포넌트에 값을 전달할때
                값(문자,숫자,논리,state,setState,함수)
                <자식 컴포넌트 props명 = 값 />
                숫자,논리{숫자,논리값},state, setState, 함수 {}

                props명 => 변수명과 동일하게 한글,영문자
            */}
            <Tset1Sub name="홍길동" age='20'/>
            <Tset1Sub name='강호동' age={23} />
            <Tset1Sub name={data1.name} age={data1.age}/>
            <Tset1Sub name={data2.name} age={data2.age}/>
            <Tset1Sub {...data1}/>
            <Tset1Sub {...data2}/>
        </div>
    );
};

export default Tset1;