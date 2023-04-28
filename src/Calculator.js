import React, { useState } from "react";

function Calculator() {
    const [value, setValue] = useState("");

    const handleClick = (event) => {
        setValue(value + event.target.value);
    };

    const handleCalculate = () => {
        try {
            const result = eval(value);
            setValue(result.toString());
        } catch (error) {
            setValue("Error");
        }
    };

    const handleClear = () => {
        setValue("");
    };

    return (
        <div>
            <input type="text" value={value} />
            <br />
            <button onClick={handleClick} value="1">
                1
            </button>
            <button onClick={handleClick} value="2">
                2
            </button>
            <button onClick={handleClick} value="3">
                3
            </button>
            <button onClick={handleClick} value="4">
                4
            </button>
            <br />
            <button onClick={handleClick} value="5">
                5
            </button>
            <button onClick={handleClick} value="6">
                6
            </button>
            <button onClick={handleClick} value="7">
                7
            </button>
            <button onClick={handleClick} value="8">
                8
            </button>
            <br />
            <button onClick={handleClick} value="9">
                9
            </button>
            <button onClick={handleClick} value="0">
                0
            </button>
            <button onClick={handleCalculate}>=</button>
            <button onClick={handleClear}>C</button>
            <br />
            <button onClick={handleClick} value="+">
                +
            </button>
            <button onClick={handleClick} value="-">
                -
            </button>
            <button onClick={handleClick} value="*">
                *
            </button>
            <button onClick={handleClick} value="/">
                /
            </button>
        </div>
    );
}

export default Calculator;
