import axios from 'axios';
import React, { useState, useEffect } from "react";

const YuseoGet = () => {
    const [text, setText] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/yuseo/').then(Response => {
        setText(Response.data);
        console.log(Response.data);
    }).catch((Error)=> {
        console.log(Error);
    })
        }, [])

    return (
        <>
        {text.map((e) => (
            <div>
                {e.id}, {e.date}, {e.summary}, {e.title}
            </div>
        ))}
        </>
    );
};

export default YuseoGet;