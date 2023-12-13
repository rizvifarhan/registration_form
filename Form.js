import React, { useEffect, useState } from "react";

const Form = () => {
    const data ={name:"",email:"",password:""}
    const [inputData, setInputData] = useState(data);
    const [flags, setFlags] = useState(false);

    useEffect(() => {
        console.log('registered');
    },[flags])

    function handleData (event) {
        setInputData({...inputData, [event.target.name]:event.target.value
        });
       
        console.log(inputData);
    };

    function handleSubmit (event) {
        event.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password) {
            alert("All fields are compulsory!");
        } else {
            setFlags(true);
        }
    }
    return (
        <div>
        <pre>{(flags)? <h2 className="ui-define">Hello,{inputData.name} .. You have Registered Successfully</h2>:""}</pre>
        <form className="container" onSubmit={handleSubmit}>
            <div className="header">
                <h1>
                Registration Form
                </h1>
            </div>
            <div>
                <input type="text" placeholder="Enter Your Name" 
                name="name" value={inputData.name} onChange={handleData} />                      
            </div>
            <div>
                <input type="text" placeholder="Enter Your Email" 
                name="email" value={inputData.email} onChange={handleData} />                   
            </div>
            <div>
                <input type="text" placeholder="Enter Your Password" 
                name="password" value={inputData.password} onChange={handleData} />                   
                
            </div>
            <button type="submit">Submit</button>

        </form>
    </div>
    )
}

export default Form;