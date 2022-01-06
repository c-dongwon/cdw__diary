import React from 'react';

const TestStep1 = ({username,age,addr,tel,chInput,onNext}) => {
    return (
        <>
            <p> <label>이름 </label> 
                <input type="text" name="username" value={username} onChange={chInput}/>
            </p>   
            <p> <label>나이 </label> 
            <input type="text" name="age" value={age} onChange={chInput}/>
            </p>   
            <p> <label>주소 </label> 
            <input type="text" name="addr" value={addr} onChange={chInput}/>
            </p>   
            <p> <label>연락처 </label> 
            <input type="text" name="tel" value={tel} onChange={chInput}/>
            </p>   
            <p>
                <button onClick={onNext}>다음</button>
            </p>
        </>
    );
};

export default TestStep1;