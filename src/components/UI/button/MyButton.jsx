import React, { useState } from "react";
import classes from './MyButton.module.css';

let MyButton = (children, ...props) => {

    return (
        <button {...props} className="classes.myBtn">
            {children}
        </button>
    )
}

export default MyButton;