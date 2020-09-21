import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemonArray: [],
    searchValue: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon/')
      .then(resp => resp.json())
      .then(pokemon => this.setState(() => ({ pokemonArray: pokemon })))
  }

  appSearchHandler = (input) => {
    this.setState(() => ({ searchValue: input }))
  }

  filterSearch = () => {
    return this.state.pokemonArray.filter(pokemon => pokemon.name.includes(this.state.searchValue))
  }

  appFormHandler = (pokemon) => {

    const pokemonObj = {
      name: pokemon.name,
      hp: pokemon.hp,
      sprites: {
        front: pokemon.frontUrl,
        back: pokemon.backUrl
      }
    }

    const options = {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify(pokemonObj)
    }


    fetch('http://localhost:3000/pokemon/', options)
      .then(resp => resp.json())
      .then(pokemon => {
        let newArray = [pokemon, ...this.state.pokemonArray]
        this.setState(() => ({ pokemonArray: newArray }))
      })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm appFormHandler={this.appFormHandler} />
        <br />
        <Search appSearchHandler={this.appSearchHandler} />
        <br />
        <PokemonCollection pokemonArray={this.filterSearch()} />
      </Container>
    )
  }
}

export default PokemonPage
