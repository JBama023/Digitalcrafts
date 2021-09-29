import React, { Component } from 'react'

export default class MyProfile extends Component {
    
    state = {
        firstName: "Jamie",
        lastName: "Busby",
        city: "Houston",
        profilePic: "https://www.newportaquarium.com/-/media/Project/HFE/NAQ/Animals/Penguins_Card.jpg?h=600&iar=0&w=600"
    }
    changeCity = () => {
        let newCity = "Spanish Wells"
        this.setState({city: newCity})
    }
    render() {
        return (
            <div>
                <h1>{this.state.firstName}, {this.state.lastName}</h1>
                <p>{this.state.city}</p>
                <button onClick={this.changeCity}>Change City</button>
                <img src={this.state.profilePic} height="200px" width="200px"></img>
            </div>
        )
    }
}
