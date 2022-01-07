import React from 'react';

const TestStep2 = ({job,email,sex,inter,chInput,onPrev,onNext}) => {
    return (
        <>
            <p> <label>직업 </label> 
            <input type="text" name='job' value={job} onChange={chInput}/>
            </p>   
            <p> <label>이메일 </label> 
            <input type="text" name='email' value={email} onChange={chInput}/>
            </p>   
            <p> <label>성별 </label> 
            <input type="text" name="sex" value={sex} onChange={chInput}/>
            </p>   
            <p> <label>관심분야 </label> 
            <input type="text" name='inter' value={inter} onChange={chInput}/>
            </p>   
            <p>
                <button onClick={onPrev}>이전</button>
                <button onClick={onNext}>다음</button>
            </p>
        </>
    );
};

export default TestStep2;