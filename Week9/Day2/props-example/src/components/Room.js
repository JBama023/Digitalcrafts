import React, { Component } from 'react'

import "./Building.css"
export default class Room extends Component {
    render() {
        return (
            <div className="Room">
                <h1>Room</h1>
                {this.props.couch}
                {this.props.chair}
            </div>
        )
    }
}
