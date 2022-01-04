import React from 'react';
// src 안에 이미지 처리할경우 
// import 참조변수 form './이미지경로'
// public 안에 이미지 #root:화면단보여주기 src='./이미지경로'

import m0 from './img/m0.jpg'
import m1 from './img/m1.jpg'
import m2 from './img/m2.jpg'

const Test10 = () => {
    return (
        <div>
            <img src={m0} alt="" />
            <img src={m1} alt="" />
            <img src={m2} alt="" />
            <hr />
            <img src="./images/cat0.jpg" alt="" />
            <img src="./images/cat1.jpg" alt="" />
        </div>
    );
};

export default Test10;