import React, { useEffect, useState } from "react";

function UseEffect() {
    const [toggle,setToggle] = useState();

    const clickHandler = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        document.title = toggle ? "Welcome to Little Lemon bro" : "Using UseEffect hook";
        console.log('The value of the toggle variable is',toggle)
    },[toggle]);// Only re-run the effect if toggle changes
    return (
        <div>
            <h1>Using UseEffect Hook</h1>
            <button onClick={clickHandler}>
                    Toggle message
            </button>
            {toggle && <h2>Welcome</h2>}
        </div>
    )
}

export default UseEffect;