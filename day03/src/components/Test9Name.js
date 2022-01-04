import React from 'react';

const Test9Name = ({ name , onName }) => {
    return (
        <div>
           <label>이름 </label> 
           <input type="text" value={name} onChange={ onName }/>
           <span style={{marginLeft:10}}>{name}</span>
        </div>
    );
};

export default Test9Name;