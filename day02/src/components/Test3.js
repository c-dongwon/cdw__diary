import React from 'react';

const Test3 = () => {
    //함수영역
    const handleClick1 = () =>{
        alert('test1')
    }
    const handleClick2 = () =>{
        alert('test2')
    }
    const handleClick3 = () =>{
        alert('test3')
    }
    const make1 = (num) =>{
        alert(num)
    }
    const make2 = (num) =>{
        alert(num)
    }
    return (
        <div>
            <h2>이벤트 처리법</h2>
            <p>
                <button onClick={handleClick1}>클릭</button>
                <button onClick={handleClick2}>클릭</button>
                <button onClick={handleClick3}>클릭</button>
            </p>

            <p>
                <button onClick={() => {
                    alert('연습')
                    console.log('dd')
                    }}>클릭</button>
                <button onClick={() => alert('연습')}>클릭</button>
                <button>클릭</button>
            </p>

            <p>
                {/* 이벤트 = {() => props명(값)} 
                    값전달
                */}
              <button onClick={ () => make1(100) }>값전달</button>
              <button onClick={ () => make2(200) }>값전달</button>
            </p>
        </div>
        
    );
};

export default Test3;