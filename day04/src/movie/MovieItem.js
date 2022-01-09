import React from 'react';

const MovieItem = ({item,onDel}) => {
    const {actor,director,date,poster,title,no} =item//비구조화할달
    return (
        <article>
            <div className='left'>
                <img src={poster} alt={title}/>
            </div>
            <div className='right'>
                <h3>{title}</h3>
                <ul>
                    <li>출연진:{actor}</li>
                    <li>감독:{director}</li>
                    <li>개봉일:{date}</li>
                </ul>
                <p>
                <button onClick={() => onDel(no)}>제거</button>
                </p>
            </div>
        </article>
    );
};

export default MovieItem;