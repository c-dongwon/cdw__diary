import React from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {
    return (
        <div>
            <Test2Sub
                name="송혜교"
                age={20}
                addr="서울"
                tel="010-111-1111"
                color="tomato"
                done={true}
            />
            <hr/>
            <Test2Sub
                name="김치맨"
                addr = "제주"
                tel = "010-1213-1111"
                color="skyblue"
            />
            <hr/>
            <Test2Sub
                name="깍둑맨"
                age={30}
            />
            <hr/>
            <Test2Sub/>
        </div>
    );
};

export default Test2;