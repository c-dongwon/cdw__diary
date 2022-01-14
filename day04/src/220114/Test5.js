import React, { useState } from 'react';

const datalist = [
    {id:1,name:'chk1',text:'이용약관',isChecked:false},
    {id:2,name:'chk2',text:'이용약관2',isChecked:false},
    {id:3,name:'chk3',text:'이용약관3',isChecked:false}
]

const Test5 = () => {
    const [data,setData] = useState(datalist)
    const chInput = (e) =>{
        const {name,checked} = e.target
        if(name === 'all'){
            setData(data.map(item => {return{...item,isChecked:checked}}))
        }else{
            setData(data.map(item => item.name === name ? {...item,isChecked:checked} : item))
        }
    }
    return (
        <div>
            <p>
                <input type="checkbox" name='all' onChange={chInput}
                checked={data.filter(item => item.isChecked !== true).length < 1}/>
                <label>전체동의</label>
            </p>
            <hr/>
            {
                data.map(item => <p key={item.id}>
                    <input type='checkbox' name={item.name} checked={item.isChecked} onChange={chInput}/>
                    <label>{item.text}</label>
                </p>)
            }
        </div>
    );
};

export default Test5;