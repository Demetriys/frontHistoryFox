'use client'
import {useState} from "react";
import ClientListElement from "@/app/components/clientsList/clientListElement";

export default function ClientsList() {

    const clients = [
        {name: 'jonn', age: 20},
        {name: 'Mike', age: 50},
        {name: 'Wilam', age: 80},
        {name: 'Potc', age: 25},
    ];

    return <>
        {clients.map((client, index) => {
            return <ClientListElement client={client} index={index}/>
        })}
    </>
}