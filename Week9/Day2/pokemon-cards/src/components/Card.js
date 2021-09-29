import React, { Component } from 'react'

export default class Card extends Component {
    
    state = {
        flipped: false
    }

    flipPic = () => {
        this.setState({
            flipped: !this.state.flipped
        })
    }
    
    
    render() {

        const { flipped } = this.state;
        const { name, hp, sprites } = this.props.data;
        
        return (
            
            <div className="pokemonCards">
                <h1>{name}</h1>
                <img src={flipped ? sprites.back : sprites.front} />
                <p>HP: {hp}</p>
                <button onClick={this.flipPic}>Flip</button>
            </div>
        )
    }
}
