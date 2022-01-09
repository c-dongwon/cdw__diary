import React from 'react';
import MovieItem from './MovieItem'
const MovieList = ({data,onDel}) => {
    //onDel List에선 쓰진않지만 MovieItem프롭스로 값을 내려줘야하기때문에 선언
    return (
     <>
        {
            data.map(item => <MovieItem key={data.no} item ={item} onDel={onDel}/>)
            //key={data.no} 은 api 고유값이 no로 선언되있음 id면 {data.id}
        }
     </>
    );
};

export default MovieList;