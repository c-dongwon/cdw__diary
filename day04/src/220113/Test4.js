import React, { useRef, useState } from 'react';

const Test4 = () => {
    const [data,setData] = useState([]);
    const [form,setForm] = useState({
        userid:'',userpw:''
    })
    const no = useRef(1)
    const idRef = useRef()
    const {userid,userpw} = form//비구조할당

    const chInput = (e) =>{
        const {value,name} = e.target//이벤트 발생중인 DOM선택
        setForm({
            ...form,//스프레드 문법
            [name]:value//name키를 value 지정
        })
    }
    const onAdd = (e) =>{
        e.preventDefault()
        if(!userid || !userpw) return //입력안하면 이벤트막음
        setData([
           ...data,
           {
               id:no.current ++,//객체 id 절대값 지정
               userid,
               userpw
           } 
        ])
        setForm({
            userid:'',//add하면 value 지움
            userpw:'',
        })
        idRef.current.focus()//idRef로 포커스잡힘
    }
    return (
        <div>
            <form onSubmit={onAdd}>
                <input type="text" value={userid} name='userid' onChange={chInput} ref={idRef}/>
                <input type="text" value={userpw} name='userpw' onChange={chInput}/>
                <button type='sumit'>추가</button>    
            </form> 
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id}/{item.userid}/{item.userpw}
                    </li>)
                }    
            </ul>  
        </div>
    );
};

export default Test4;