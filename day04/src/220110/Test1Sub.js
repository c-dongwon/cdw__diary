import React from 'react';

const Test1Sub = ({onDel,onMod}) => {
    return (
        <div>
            <h2>삭제</h2>
            <p>
                <button onClick={() => onDel(1)}>김다미</button>
                <button >송혜교</button>
                <button>유재석</button>
                {/* 온클릭은 바로 실행되기때문에 함수로 한번 묶어준다 */}
                <button>최우식</button>
            </p>
            <h2>수정</h2>
            <p>
                <button onClick={() => onMod(2)}>최우식</button>
                <button >김도윤</button>
                <button >김다미</button>
            </p>
        </div>
    );
};

export default Test1Sub;