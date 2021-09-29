import React, { Component } from 'react'

export default class ClassComponent extends Component {
    state = {
        counter: 0,
        studentName: "Jamie",
    }
    increaseCounter = () => {
    this.setState({counter : this.state.counter + 1})  
    }
    decreaseCounter = () => {
        this.setState({counter : this.state.counter - 1})  
        }
    changeStudent = () => {
        let name = "Dustin";
        this.setState({studentName: name})
    }
    render() {
        return (
            <div>
                <p>Class Counter</p>
                <p>student name: {this.state.studentName}</p>
                <p>counter is : {this.state.counter}</p>
                <button onClick={this.increaseCounter}>Increase</button>
                <button onClick={this.decreaseCounter}>Decrease</button>
                <button onClick={this.changeStudent}>Change The Student</button>
            </div>
        )
    }
}
