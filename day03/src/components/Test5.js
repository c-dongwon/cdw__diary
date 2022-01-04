import React, { useState } from 'react';

const Test5 = () => {
    const [ isChecked , setIsChecked] = useState(false)

    const changeInput  = (e)  => {
        const { checked } = e.target 
        setIsChecked( checked )
    }

    return (
        <div>
            <input type="checkbox" checked={ isChecked } onChange={changeInput }/>            
            { isChecked ? '숨기기':'보이기'}
           
            {
                isChecked ? 
                <div style={{width:200, height:100, background:'red', margin:10}}></div>
                :null 
            }
            <hr />
            {
                isChecked && <div style={{width:200, height:100, background:'red', margin:10}}></div>
            }
        </div>
    );
};

export default Test5;