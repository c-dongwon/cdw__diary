import React, { useState } from 'react';
import TestStep1 from './TestStep1';
import TestStep2 from './TestStep2';
import TestStep3 from './TestStep3';
import TestStep4 from './TestStep4';
import './style.css'
const Main = () => {
    const [step, setStep] = useState(1)
    const [form, setForm] = useState({
        username:'',age:'',addr:'',tel:'',job:'',email:'',sex:'',interests:'',
    })
    const {username,age,addr,tel,job,email,sex,interests} = form //비구조화할당 값추출  

    const chInput = (e) =>{
        const {value,name} = e.target
        setForm({
            ...form,//스프레드문법 form 인풋 복사
            [name] : value //name 키를 가진값을 value 로 설정
        })
    }
    const onPrev = () =>{
        setStep(step -1)
    }
    const onNext = () =>{
        setStep(step + 1)
    }
    return (
        <div className="wrap">
            {
                step === 1 && 
                <TestStep1 username={username} age={age} tel={tel} chInput={chInput} onNext={onNext}/>
            }
             {
                step === 2 && 
                <TestStep2 form={form} onNext={onNext} chInput={chInput} onPrev={onPrev}/>
            }
             {
                step === 3 && 
                <TestStep3 {...form} onNext={onNext} onPrev={onPrev}/>
            }
             {
                step === 4 && 
                <TestStep4 username={username}/>
            }
        </div>
    );
};

export default Main;