import React, { useRef, useState } from 'react';

const Test4 = () => {
    const [data,setData] = useState([])
    const [form,setForm] = useState({
        userid:'',
        userpw:''
    })
    const no = useRef(1)
    const idRef = useRef()
    const {userid,userpw} = form
    const chInput = (e) =>{
        const {name,value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }
    const onAdd = (e) =>{
        e.preventDefault()
        if(!userid || !userpw) return
        setData([
            ...data,
            {id:no.current++,
            userid,
            userpw}
        ])
        setForm({
            userid:'',
            userpw:''
        })
        idRef.current.focus()
    }
    return (
        <div>
           <form onSubmit={onAdd}>
                <input type='text' name='userid' value={userid} onChange={chInput} ref={idRef}/>
                <input type='text' name='userpw' value={userpw} onChange={chInput}/>
                <button type="sumit">추가</button>   
            </form> 

            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id}/{item.userid}/{item.userpw}</li>)
                }    
            </ul>            
        </div>
    );
};

export default Test4;