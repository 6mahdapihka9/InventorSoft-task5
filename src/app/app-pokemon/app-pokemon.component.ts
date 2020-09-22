import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PokemonService} from '../services/pokemon.service';

export class PokemonModel {
  name: string;
  url: string;
}

@Component({
  selector: 'app-app-pokemon',
  templateUrl: './app-pokemon.component.html',
  styleUrls: ['./app-pokemon.component.css']
})
export class AppPokemonComponent implements OnInit {
  countTo = [];
  pokemons: PokemonModel [] = [];
  pokemonImg: string;
  isHiddenImage = true;
  // imgElement = document.getElementById('imgElement');
  constructor(private PS: PokemonService) {
    for (let i = 0; i < 10; i++) {
      this.countTo.push({
        name: 'name ' + i,
        weight: 'weight ' + i,
        size: 'size ' + i,
        rarity: 'rarity ' + i,
        attack: 'attack ' + i
      });
    }
    const greetingPoster = new Promise((resolve, reject) => {
      resolve();
    });
    greetingPoster.then(() => {
      this.pokemonImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png';
    })
    .catch(() => {
      console.error('Error with getting image');
    });
  }
  ngOnInit(): void {
    this.PS.getData().subscribe(data => this.pokemons = data['results']);
  }

  showPokemon(url: string): void {
    this.isHiddenImage = false;
    this.PS.getPokemonsImg(url).subscribe(data => this.pokemonImg = data['sprites']['front_shiny']);
  }
}
