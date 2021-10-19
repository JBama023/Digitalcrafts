import React from 'react'

 const data = [
    {name: "Jose"},
    {name: "Britt"},
    {name: "Matt"},
    {name: "Dustin"},
    {name: "Justin"},
    {name: "Kayla"},
    {name: "Deanna"},
    {name: "Cameron"},
    {name: "Tim"},
    {name: "Ron"},
    {name: "Jamie"},
    {name: "Brande"},
    {name: "Jordan"},
    {name: "Xavier"},
 ]

function cardContainer() {
    return (
        <div>
            <p>{props.data.name}</p>
        </div>
    )
}
