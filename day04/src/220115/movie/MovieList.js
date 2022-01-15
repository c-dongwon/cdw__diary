import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({data,onDel}) => {
    return (
        <>
            {
                data.map(item => <MovieItem key={data.no} item={item} data={data} onDel={onDel}/>)
            }
        </>
    );
};

export default MovieList;