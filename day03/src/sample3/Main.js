import React, { useState } from 'react';
import TestStep1 from './TestStep1';
import TestStep2 from './TestStep2';
import TestStep3 from './TestStep3';
import TestStep4 from './TestStep4';
import './style.css'
const Main = () => {
    const [step,setStep] = useState(1);
    const [form,setForm] = useState({
        username:'',age:'',addr:'',tel:'',job:'',email:'',sex:'',inter:''
    })
    const {username,age,addr,tel,job,email,sex,inter} = form

    const onNext = () =>{
        setStep(step + 1)
    }
    const onPrev = () =>{
        setStep(step - 1)
    }
    const chInput = (e) =>{
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    }
    return (
        <div className='wrap'>
            {
                step === 1 && 
                <TestStep1 {...form} chInput={chInput} onNext={onNext}/>
            }
             {
                step === 2 && 
                <TestStep2 form = {form} chInput={chInput} onNext={onNext} onPrev={onPrev}/>
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