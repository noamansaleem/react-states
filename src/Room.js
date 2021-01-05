import React, { useState } from 'react';
import './Room.css'

function Room() {
    let [isLit, setLit] = useState(true);
    let [age, setAge] = useState(32);
    let [currentTemp, setTemp] = useState(72);

    // function changeLit() {
    //     console.log("Button Pressed!");
    //     isLit = !isLit;
    //     setLit(isLit);
    // }

    function incrementAge() {
        console.log("Age button pressed!");
        setAge((age = age + 1));
    }

    let brightness = (isLit ? "lit" : "dark");

    return (
        <div className={`room ${brightness}`}>The room is {isLit ? "Light" : "Dark"}
            <br />
            Temperature is : {currentTemp}
            <br />
            Set Temperature <button onClick={() => setTemp(currentTemp + 1)}>+</button> <button onClick={() => setTemp(currentTemp - 1)}>-</button>
            <br />
            <button onClick={() => setLit(!isLit)}>Toggle Light</button>
            {/* <button onClick={changeLit}>Toggle Light</button> */}
            <br />
            <br />
            <button onClick={() => setLit(isLit = true)}>On the Light!</button>
            <br />
            <br />
            <button onClick={() => setLit(isLit = false)}>Off the Light!</button>
            <br />
            <br />
            My age is: {age}
            <br />
            <br />
            <button onClick={incrementAge}>Increment Age</button>
        </div>

    );
}

export default Room;