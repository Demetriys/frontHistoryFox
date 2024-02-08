'use client'
import CalcInput from "@/app/components/calc/input";
import CalcButton from "@/app/components/calc/button";
import {useState} from "react";

export default function CounterComponent () {

    const  [number, setNumber] = useState(10);

    function handleUp () {
        setNumber(number+1);
    }
    function handleDown () {
        setNumber(number-1);
    }
    return <>
        <center>
        <h1>Super Counter</h1>

        <h2> Result {number} </h2>

            <button onClick={handleUp} > Up </button>
            <hr/>
            <button  onClick={handleDown}> Down </button>


        </center>
    </>
}