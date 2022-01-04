import React, { useRef } from 'react';

const Test2 = () => {
    const colorRef = useRef(null)

    const onSelect = ()  => {
        const data = {
            color:colorRef.current.value 
        }
        console.log( data )
        const json = JSON.stringify( data , null , 5 )
        console.log( json )
    }

    return (
        <div>
            <h2> 컬러 선택 </h2>
            <select ref={ colorRef }>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="pink">pink</option>
                <option value="tomato">tomato</option>
                <option value="skyblue">skyblue</option>
            </select>
            <button onClick={ onSelect }>선택</button>
        </div>
    );
};

export default Test2;

/*
    함수 컴포넌트는 렌더링 될때마다 내부의 것을 다시 계산처리해야함
    생성뿐만 아니라 업데이트 될때마다 다시 만들기 때문이다 

    그래서 use* : hooks 
    함수형이라서 함수 실행될 때마다 내부의  것은 메모리가 안되어서 다시 만들어야 쓸수 있다 
    그래서 훅이 등장해서 클래스 컴포넌트 처럼 사용한다 

    useState : const [ 상테데이터 , 상테데이터변경함수 ] = useState(초기값)
    useRef 
    실제 DOM 노드를 참조(Ref) 할경우 사용 
    참조 대상의 변경이 필요한 경우 .current 속성을 사용 

    const nameRef = useRef( null ) - useRef hook 생성 
    const num = useRef( 초기값 )
    const num = useRef( 10 )
    num.current++
    nameRef.current.style.xxx = '값'
    <요소 ref={nameRef} />

    useRef를 사용해 실제 DOM노드를 조작할 경우 컴포넌트가 다시 그려지지 않는다 
          내부에서 특정 값을 지속적으로 참조할때 사용 
          
    useState 훅과 달리 useRef 훅은 현재(current) 값이 변경되어도 컴포넌트가 다시 렌더링되지 않아 성능을 최적화 할수 있음 ( 불필요한 렌더링 방지 ) : 하지만 남용하지 않는다 
    
    사용범위 
    DOM을 직접 선택해야 하는 상황
    특정요소의 크기가져오기 
    포커스 설정 
    스크롤바 위치 

*/