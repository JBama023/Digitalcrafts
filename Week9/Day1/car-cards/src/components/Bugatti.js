import React, { Component } from 'react'

export default class Bugatti extends Component {
    
    
  bugatti = {
    make: "Bugatti",
    model: "La voiture noire",
    engine: "v16",
    horsepower: "1500",
    price: "19000000",
    image: [
      {
        primary: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",
        secondary:
          "https://www.carscoops.com/wp-content/uploads/2019/03/c64f9e1e-bugatti-la-voiture-noire-roadster-rendering-0-1024x554.jpg",
      },
    ],
    transmission: "7 speed dual clutch",
    topSpeed: [{ US: "261", Metric: "420" }],
  };

  render() {
        return (
            <div>
                <h1>make: {this.bugatti.make}</h1>
                <p>model: {this.bugatti.model}</p>
                <p>engine: {this.bugatti.engine}</p>
                <p> horsepower: {this.bugatti.horsepower}</p>
                <p>price: {this.bugatti.price}</p>
                <img src={this.bugatti.image[0].primary} height="200px" width="200px"></img>
                <p>transmission: {this.bugatti.transmission}</p>
                <p>topspeed: US: {this.bugatti.topSpeed[0].US}, metric: {this.bugatti.topSpeed[0].Metric}</p>
                <button>Change Image</button>
            </div>
        )
    }
}
