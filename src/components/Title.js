import React from 'react';
import style from './css/Title.css';

const Title = props => {
    return(
        <div className={style.Title}>
            <h1>{props.title}</h1>
            <div>Current number items in list is {props.noumber}</div>
        </div>
    );
}
export default Title