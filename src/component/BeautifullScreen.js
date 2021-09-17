import React from 'react';

function BeautifullScreen(props) {

    return (
        <div className="input">
            <h2 className="value">{props.value}</h2>

            <h3 className="calc">{props.calc}</h3>
        </div >
    );

}

export default BeautifullScreen;
