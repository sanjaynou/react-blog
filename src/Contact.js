import React, { useState } from 'react';
function Contact(props) {

    const [val,setVal]=useState("Sanjay");
    const test =(e)=>{
        console.log('test function',e.target.value);
        setVal(e.target.value);
    }
    return (
        <>
            <h1>Contact Us page</h1>    
            <input type="text" value={val} onChange={test}/>
            <button onClick={()=>alert(val)}>Click Me</button>
        </>
    )
}

export default Contact;