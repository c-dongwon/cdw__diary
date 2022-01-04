import React from 'react';

const Test9Ani = ({ ani,  onAni }) => {
    return (
        <div>
            <label>동물 </label> 
            <input type="text" value={ani}  onChange={ onAni }/>
            <span style={{marginLeft:10}}> {ani} </span>
        </div>
    );
};

export default Test9Ani;