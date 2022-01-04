import React from 'react';

const Test4 = () => {
    const title = "슬기로운 의사생활"
    const arr = ['조정석','유연석','정경호','김대명','전미도']
    const data = [
        {id:1,name:'조정석'},
        {id:2,name:'유연석'},
        {id:3,name:'정경호'},
        {id:4,name:'김대명'},
        {id:5,name:'전미도'},
    ]
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {arr.map((item,index)=> <li key={index}>
                    {index}/{item}
                </li>)}
                {/* 
                    jsx출력 map은 key:고유번호(예:주민번호)
                    index번호를 주로 사용하지 않는다
                    반복적으로 처리되는 컴포넌트 요소는 각 항목을
                    식별하기 위해 고유한 값을 갖는 key속성을 포함해야한다
                    (react의 권고사항)
                    index번호를 주로 사용하지않는다 (단순출력만할경우)
                    단 수정,삭제,갱신등등 고유번호를 사용한다
                    주로 객체.키
                */}
            </ul>
            <hr/>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id}/{item.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test4;