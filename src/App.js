import React, { Component } from "react";
import pokemons from "./data/pokemons.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "pikachu",
      pokeImg: null,
    };
  }

  getPokemon(Pokename) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Pokename}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: Pokename,
          pokeImg: data.sprites.other["official-artwork"].front_default,
        });
      });
  }

  changeHandler(event) {
    // this.setState({
    //   name: event.target.value,
    // });
    // this.getPokemon(this.state.value)
    this.getPokemon(event.target.value);
  }

  componentDidMount() {
    this.getPokemon(this.state.name);
  }

  render() {
    console.log("I am redering");
    return (
      <div>
        <h3> Poke App</h3>
        <p>I have {pokemons.length} POKEMONS!!!</p>
        <select
          value={this.state.name}
          onChange={this.changeHandler.bind(this)}
        >
          {pokemons.map((poke) => (
            <option key={poke.id} value={poke.name}>
              {poke.name}
            </option>
          ))}
        </select>
        <p>{this.state.name} I choose you!</p>
        <img src={this.state.pokeImg} alt={this.state.name} />
      </div>
    );
  }
}

export default App;
