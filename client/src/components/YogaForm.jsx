import React, { useState } from "react";
import classes from "./YogaForm.module.css"
import Input from "./Input"
import Batch from "./Batch";
import Response from "./Response";

const YogaForm = () => {


    var [onInputAge,setInputAge] = useState("18");
    var [onInputName,setInputName] = useState("");
    var [onInputBatch, setInputBatch] = useState("");
    
    const onChangeHandlerName = (event) => {
        setInputName(onInputName = event.target.value)
    }
    const onChangeHandlerAge = (event) => {
        setInputAge(onInputAge = event.target.value)
    }
    const onChangeHandlerBatch = (event)=>{
        setInputBatch(onInputBatch = event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
    }
    const onPostDataHandler = async (event) => {
        const res = await fetch("/yoga",{
            method : "POST",
            headers : {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name:onInputName,age:onInputAge,batch:onInputBatch
            })
        })
        const data = await res.json()

        if(data.status === 400 || !data){
            window.alert("NO DATA");
        }else{
            window.alert("SUCCESS");
        }
        
    }

    return <div className={classes.justform}>
        <form method="POST" onSubmit={submitHandler} className={classes.form}>
        <Input onChange = {onChangeHandlerName} placeholder = "Input Name" input = {{
                value : onInputName,
                type : "text",
                id: "name",
            }}></Input>
            <Input onChange = {onChangeHandlerAge} placeholder = "Input Age" input = {{
                value : onInputAge,
                type : "number",
                id: "age",
                min :'18',
                max :"65",
                step : "1"
            }}></Input>
            <Input onChange = {onChangeHandlerBatch} placeholder = "Input Batch " input = {{
                value : onInputBatch,
                type : "text",
                id: "batch",
            }}></Input>
            {/* <Batch onChange = {onChangeHandlerAge}/> */}
            <button className={classes.button} onClick = {onPostDataHandler}> Pay</button>
        </form>
    </div>
}

export default YogaForm