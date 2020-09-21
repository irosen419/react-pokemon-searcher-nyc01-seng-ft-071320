import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    image: this.props.pokemon.sprites.front
  }

  toggleImage = () => {
    return this.state.image === this.props.pokemon.sprites.front ? this.setState(() => ({ image: this.props.pokemon.sprites.back })) : this.setState(() => ({ image: this.props.pokemon.sprites.front }))
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.image} onClick={this.toggleImage} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
