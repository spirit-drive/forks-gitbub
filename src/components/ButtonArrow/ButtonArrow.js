import React from "react";
import IconArrow from '../IconArrow/IconArrow';
import Button from '../Button/Button';


const ButtonArrow = props =>
    <Button className={`button-arrow${props.className ? ` ${props.className}` : ''}`} onClick={props.onClick} disabled={props.disabled}><IconArrow className={`icon-arrow_${props.vector || 'bottom'}`}/></Button>;

export default ButtonArrow