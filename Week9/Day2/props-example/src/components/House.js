import React, { Component } from 'react'

import Room from "./Room"
import "./Building.css"

export default class House extends Component {
    render() {
        console.log(this.props.couch)
        console.log(this.props.chair)
        return (
            <div className="House">
                <h1>House</h1>
                <Room couch={this.props.couch}/>
                <Room chair={this.props.chair}/>
                <Room />
            </div>
        )
    }
}
