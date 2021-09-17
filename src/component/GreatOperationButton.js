import React, { useState } from "react";
// import Calculator from './Calculator';



function GreatOperationButton(props) {





    return (

        <button  className="ClearButton" id="ope" onClick={() => props.handleClick(props.value)}>{props.value}</button>


    );
}

export default GreatOperationButton;