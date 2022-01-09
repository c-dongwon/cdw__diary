import React, { useRef, useState } from 'react';

const Test4 = () => {
    const no = useRef(1)
    const idRef = useRef()
    const [data,setData] = useState([])
    const [form,setForm] = useState({
        userid:'',userpw:'',
    })
    const {userid,userpw} = form//비구조할당

    const chInput = (e) =>{
        const {value,name} = e.target//이벤트 발생중인 DOM선택
        setForm({
            ...form,//스프레드 문법
            [name]:value//name 키를 value 지정
        })
    }
    const onAdd = (e) =>{
        e.preventDefault()
        // if( userid.length === 0 || userpw.length === 0){
        //     return
        //     //입력하지 않았을경우 이벤트 막기
        // }
        if(!userid || !userpw) return
        setData([
            ...data,
            {   
                id:no.current ++,//개체 지워지면 자동으로 id값 변경
                // userid:userid, //키값 : 벨류
                // userpw:userpw
                userid,
                userpw
            }
        ])
        setForm({
            userid:'',
            userpw:''
        })//add하면 인풋 지워짐
        idRef.current.focus()//id인풋으로 포커스 설정
    }
    return (
        <div>
            <form onSubmit={onAdd}>
                <input type="text" onChange={chInput} name='userid' value={userid} ref={idRef}/>
                <input type="text" onChange={chInput} name='userpw' value={userpw}/>
                <button type="submit">추가</button>
            </form>
            <hr/>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id}/{item.userid}/{item.userpw}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test4;