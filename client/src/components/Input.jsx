import React from "react";
import classes from "./Input.module.css"

const Input = (props) => {
    return <div className={classes.input}>
        <label htmlFor = {props.input.id} >{props.placeholder}</label>
        <input placeholder={props.placeholder} onChange={props.onChange} {...props.input}></input>
    </div>
}

export default Input