import React from 'react';
import PropTypes from 'prop-types';
/*
const Test2Sub = ( props ) => {
    return (
        <div style={{border:`2px solid ${props.color}`,padding:25,margin:25}}>
            <ul>
                <li>이름:{props.name}</li>
                <li>주소:{props.addr}</li>
                <li>전화:{props.tel}</li>
                <li>나이:{props.age}</li>
                <li>컬러:{props.color}</li>
                <li>참거짓:{props.done ? '참':'거짓'}</li>
            </ul>
        </div>
    );
};
*/

const Test2Sub = ( props ) => {
    const {name,age,color,tel,addr,done} = props
    return (
        <div style={{border:`2px solid ${props.color}`,padding:25,margin:25}}>
            <ul>
                <li>이름:{name}</li>
                <li>주소:{addr}</li>
                <li>전화:{tel}</li>
                <li>나이:{age}</li>
                <li>컬러:{color}</li>
                <li>참거짓:{done ? '참':'거짓'}</li>
            </ul>
        </div>
    );
};

/*
const Test2Sub = ( {name,age,color,tel,addr,done} ) => {
    // const {name,age,color,tel,addr,done} = props
    return (
        <div style={{border:`2px solid ${props.color}`,padding:25,margin:25}}>
            <ul>
                <li>이름:{name}</li>
                <li>주소:{addr}</li>
                <li>전화:{tel}</li>
                <li>나이:{age}</li>
                <li>컬러:{color}</li>
                <li>참거짓:{done ? '참':'거짓'}</li>
            </ul>
        </div>
    );
};
*/

Test2Sub.propTypes = {
    name: PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    addr:PropTypes.string,
    color:PropTypes.string,
    done:PropTypes.bool
};

Test2Sub.defaultProps = {
    name: '아무개',
    age:20,
    addr:'서울',
    color:'yellow',
    tel:'0101',
    done:false
};

export default Test2Sub;


/*
    PropTypes는 전달받은 데이터의 유효성을 검증하기 위해서
    다양한 유효성 검사기(Validator)를 내보냅니다. 

    컴포넌트  props의 필수 여부를 지정하거나 props의 DataType을 지정할
    때 사용 이컴포넌트로 전달되는 props값들에 대한 형식과 필수여부 
    지정하고 규칙에 맞지않은 props값에 대한 브라우저 콘솔에
    warning메시지가 출력

   컴포넌트명.propTypes = {
    props명: PropTypes.타입.isRequired
};

 props의 초깃값을 정의할 수 있습니다

 컴포넌트명.defaultProps = {
  props명: '기본값'
};
*/