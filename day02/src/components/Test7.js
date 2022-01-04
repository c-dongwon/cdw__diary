import React,{ useState } from 'react';

const Test7 = () => {

    const [ visible,setVisble ] = useState(false)
    const onShow = () =>{
        setVisble(true)
    }
    const onHide = () =>{
        setVisble(false)
    }
    const onToggle = () =>{
        setVisble( !visible )
    }
    return (
        <div>
            <p>
                <button onClick={ onShow }>보이기</button>
                <button onClick={ onHide }>숨기기</button>
                <button onClick={ onToggle }>
                    { visible ? '숨기기':'보이기'}
                    {/* 삼항연산자 */}
                </button>
            </p>
            
            {
                visible === true ?
                <div style={{width:400,height:150,margin:10,
                                background:'tomato'}}></div>
                                :null
                            }
            <hr/>
            {
                visible &&
                <div style={{width:400,height:150,margin:10,
                    background:'tomato'}}></div>
                    // 값이 트루면 굳이 삼항연산자 필요 x

            }
        </div>
    );
};

export default Test7;