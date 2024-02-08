'use client'
import CalcInput from "@/app/components/calc/input";
import CalcButton from "@/app/components/calc/button";
import {useState} from "react";

export default function Calc () {

const  [firstNumber, setFirstNumber] = useState(0);
const  [secondNumber, setSecondNumber] = useState(0);
    return <>
        <CalcInput initialNumber={firstNumber} changeNumber={setFirstNumber} />
        <CalcInput initialNumber={secondNumber} changeNumber={setSecondNumber}  />
        <CalcButton/>
        <hr/>
        <div>Result : {Number(firstNumber) + Number(secondNumber)}</div>
        {console.log(firstNumber,secondNumber)}
    </>
}