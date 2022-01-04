import React, { useRef } from 'react';

const Test12 = () => {
    const nameRef = useRef(null)
    const pwRef = useRef(null)
    const onData = () =>{
        const data = {
            name:nameRef.current.value,
            pw:pwRef.current.value
        }
        const json = JSON.stringify(data,null,5)
        console.log(data)
        console.log(json)
        //mdb - JSON검색 stringfy
    }
    return (
        <div>
            {/* useRef 수업용 : 사용가능하나 좋은예는 아니다 */}
            <input type='text' ref={nameRef}/>
            <input type='text' ref={pwRef}/>
            <button onClick={onData}>확인</button>
        </div>
    );
};

export default Test12;