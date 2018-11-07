import React from "react";

const IconArrow = ({className}) => (
    <svg className={`icon-arrow${className ? ` ${className}` : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 30">
        <path d="M25,30L50,5,45,0,25,20,5,0,0,5Z"/>
    </svg>

);

export default IconArrow