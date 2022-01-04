import React,{ useState } from 'react';
import { useRef } from 'react/cjs/react.development';

const Test11 = () => {
    const nameRef = useRef(null)
    const [userName,setUserName] = useState('')
    const [userPw,setUserPw] = useState('')
    const chinput = (e) => {
        setUserName(e.target.value)
    }
    const chinput2 = (e) => {
        const {value} = e.target
        setUserPw( value )
    }
    const onReset = () =>{
        setUserName('')
        setUserPw('')
        nameRef.current.focus()
    }
    return (
        <div>
            <p>
                <input type='text' onChange={chinput} value={userName} ref={nameRef}/>
                <input type='text' onChange={chinput2} value={userPw}/>
                <button onClick={onReset}>초기화</button>
                <h3>아이디 : {userName}</h3>
                <h3>비밀번호 : {userPw}</h3>
            </p>
        </div>
    );
};

export default Test11;