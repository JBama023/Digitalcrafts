import React from 'react'
import Students from "./Students.js"

export default function StudentContainer(props) {
    return (
        <div>
            <h1>Student Container</h1>
            {props?.student.map((Students))}
            <Students Students={props.Students} />
        </div>
    )
}
