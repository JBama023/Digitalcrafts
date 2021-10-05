import React from 'react'
import "../../App.css"
import Neighborhood from '../Neighborhood/Neighborhood'
import {useSelector} from "react-redux"
export default function Dealership(props) {
    const bugatti = useSelector(state => state.bugatti)
    return (
        <div className="box">
            <h1>Dealership</h1>
            <h2>Cars in our dealership</h2>
            <p>{props.mustang}</p>
            <Neighborhood mustang={props.mustang} />
            <p>{bugatti}</p>
        </div>
    )
}
