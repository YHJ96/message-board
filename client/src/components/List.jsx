import React from 'react';
import ListItem from './ListItem';
import axios from 'axios';

function List() {
    const hanldeOnClick = () => {
        axios.get("/list")
        .then((res) => console.log(res));
    }

    const makeListItems = () => {
        const data =  [
        { title: "양희준", content: "코드스테이츠" },
        { title: "심소영", content: "코드스테이츠" },
        { title: "이유진", content: "코드스테이츠" }];

    return data.map((item, index) => <ListItem key={index} title={item.title} content={item.content}/>)
    }
    return (
        <>
        {makeListItems()}
        <button onClick={hanldeOnClick}>통신</button>
        <button id='10' type='checkbox' value={1}></button>
        </>
    )
}

export default List;