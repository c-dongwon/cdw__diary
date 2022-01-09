import React, { useState } from 'react';

const dataList = [
    {id:1,name:'chk1',text:'이용약관(필수)',isChecked:false},
    {id:2,name:'chk2',text:'개인정보동의(필수)',isChecked:false},
    {id:3,name:'chk3',text:'수신동의(필수)',isChecked:false},
]

const Test5 = () => {
    const [data,setData] = useState(dataList)
    const chInput = (e) =>{
        const {name,checked} = e.target
       if(name === 'all'){
           setData(data.map(item => {return{...item,isChecked : checked}}))
       }else{
            setData(data.map( item => item.name === name ? {...item,isChecked:checked}:item))
       }
    }
    return (
        <div>
            <p>
                <input type="checkbox" name="all" onChange={chInput} checked={data.filter(item => item.isChecked !== true).length < 1}/>
                <label>전체동의</label>
            </p>
            <hr/>
            {/* <p>
                <input type="checkbox" name="chk1" checked={false}/>
                <label>이용약관(필수)</label>
            </p>
            <p>
                <input type="checkbox" name="chk2" checked={false}/>
                <label>개인정보동의(필수)</label>
            </p>
            <p>
                <input type="checkbox" name="chk3" checked={false}/>
                <label>수신동의(필수)</label>
            </p> */}
            {
                data.map(item => <p key={item.id}>
                    <input type="checkbox" name={item.name} checked={item.isChecked} onChange={chInput}/>
                    <label>{item.text}</label>
                </p>)
            }
        </div>
    );
};

export default Test5;