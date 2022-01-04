import React, { useRef, useState } from 'react';

const Test7 = () => {
    const idRef = useRef()
    const [ form , setForm ] = useState({
        userid:'', userpw:'', useremail:''
    })

    const { userid , userpw , useremail } = form 

    const changeInput = (e)  => {
        const { value, name } = e.target 
        setForm({
            ...form , 
            [name]: value 
        })      
    }
    
    const onReset =()  => {   
        setForm({
            userid:'' , userpw:'', useremail:''
        })   
        idRef.current.focus()
    }
    return (
        <div>
            <p>
                <input type="text" value={userid } onChange={changeInput} ref={ idRef } name="userid" />
                <input type="text" value={userpw } onChange={changeInput} name="userpw" />
                <input type="text" value={useremail } onChange={changeInput} name="useremail" />
                <button onClick={ onReset }>초기화</button>
            </p>
            <h3>아이디: {userid} </h3>
            <h3>비밀번호: {userpw} </h3>
            <h3>이메일: {useremail } </h3>
        </div>
    );
};

export default Test7;