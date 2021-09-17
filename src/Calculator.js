import React, { useState, useEffect } from 'react';
import * as math from 'mathjs';

import TheTitle from './component/TheTitle';
import AmazingNumberButton from './component/AmazingNumberButton';
import BeautifullScreen from './component/BeautifullScreen';
import GreatOperationButton from './component/GreatOperationButton';
import MagnificientEqualButton from './component/MagnificientEqualButton';
import ItsOver9000 from './component/ItsOver9000';

function Calculator() {

    // useState c'est un état global à définir
    const [value, setValue] = useState("");
    const [calc, setCalc] = useState("");
    // const [over, over9000] = useState("");

    const handleClick = (e) => {
        // console.log(e.target.value);
        setValue((value) => [...value, e]);

    }

    const calculate = () => {
        let lastValue = value.slice(-1);
        if (isNaN(lastValue)) {
            return;
        } else {
            const calc = value.join(""); // remove Last value
            setCalc(math.evaluate(calc));
        }

    }

    const deleteAll = () => {
        setValue("");
        setCalc("");
    }

    const [over, setOver] = useState("");
    // Si le result est au dessus de 9000
    useEffect(() => {
        if (calc > 9000) {
            setOver("It's Over 9000");
        } else {
            setOver("");
        }
    }, [calc]);

    return (   
        <section className="calculator">       
            <div>
                <TheTitle value="Calculator9000" />
            </div>

                <ItsOver9000 />

            <BeautifullScreen value={value} calc={calc} />
            <div class="bloc_button">
                <div className="Operation">
                    <GreatOperationButton value="/" handleClick={handleClick} />
                    <GreatOperationButton value="*" handleClick={handleClick} />
                    <GreatOperationButton value="+" handleClick={handleClick} />
                    <GreatOperationButton value="-" handleClick={handleClick} />
                </div>          
                <div className="Operation">
                    <AmazingNumberButton value="1" handleClick={handleClick} />
                    <AmazingNumberButton value="2" handleClick={handleClick} />
                    <AmazingNumberButton value="3" handleClick={handleClick} />
                    <AmazingNumberButton value="4" handleClick={handleClick} />
                    <AmazingNumberButton value="5" handleClick={handleClick} />
                    <AmazingNumberButton value="6" handleClick={handleClick} />
                    <AmazingNumberButton value="7" handleClick={handleClick} />
                    <AmazingNumberButton value="8" handleClick={handleClick} />
                    <AmazingNumberButton value="9" handleClick={handleClick} />
                    <AmazingNumberButton value="0" handleClick={handleClick} />
                </div>
                <div className="Equal">
                    <AmazingNumberButton value="." handleClick={handleClick} />
                    <MagnificientEqualButton value="=" handleClick={calculate} />
                    <GreatOperationButton value="C" handleClick={deleteAll} />

                </div>
            </div>
        </section >

    );
}



export default Calculator;
