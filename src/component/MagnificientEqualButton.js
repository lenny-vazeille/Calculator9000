import React, { useState } from "react";

function MagnificientEqualButton(props) {
    return (
        <button id="equal" onClick={() => props.handleClick(props.value)}>{props.value}</button>
    );
}

export default MagnificientEqualButton;