import React, { useState } from 'react';

const MyComp = () => {
    const [data, setData] = useState('')
    function myFunc(e) {
        const imoji = {
            "happy": "happy.jpg",
            "sad": "sad.jpg",
            "smiley": "smiley.jpg"
        }
        let val = e.currentTarget.value;
        // console.log(val);
        val = val.split("::").map((e, i) => i & 1 ? imoji[e] : e);
        // val = val.split("::").map((e, i) => i & 1 ? '<img src="'+imoji[e]+'" alt="img" />' : e);
        setData(val);
    }
    return (
        <div id="main">
            <input type="text" name="search" onchange="" onChange={myFunc} placeholder="Type Here ..." />
            <div id="text" style={{textAlign:"left",marginTop:"20px"}}>{data}{/*  <img src="/sad.jpg" alt="" /> */}</div>
        </div>
    )
}

export default MyComp