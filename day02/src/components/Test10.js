import React from 'react';

const Test10 = () => {
    //event,evt,e
    const onView = ( e ) =>{
        console.log(e.target)
        console.log(e.currentTarget)
        //target : 가르키는대상
        //currentTarget : 이벤트 대상
    }

    return (
        <div>
            <button onClick={onView}>
                <span>확인</span>
                <b>클릭</b>
            </button>
        </div>
    );
};

export default Test10;