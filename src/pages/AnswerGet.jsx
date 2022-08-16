import axios from 'axios';
import React, { useState, useEffect } from "react";

const AnswerGet = () => {
    const [text, setText] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/QnA/question/').then(Response => {
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

              {e.id}, {e.title}, {e.subtitle}
              
            </div>
        ))}
        </>
    );
};

export default AnswerGet;