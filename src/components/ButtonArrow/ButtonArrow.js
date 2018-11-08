import React from "react";
import IconArrow from '../IconArrow/IconArrow';
import Button from '../Button/Button';
import getClassName from '../../lib/getClassName'


const ButtonArrow = props =>
    <Button className={getClassName('button-arrow', props.className)} onClick={props.onClick} disabled={props.disabled}><IconArrow className={`icon-arrow_${props.vector || 'bottom'}`}/></Button>;

export default ButtonArrow