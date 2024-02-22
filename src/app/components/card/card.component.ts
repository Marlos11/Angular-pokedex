import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { PokemonData } from '../../../data/pokemonData';





@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


export class CardComponent implements OnInit {

  pokemon: PokemonData = {
    id: 0,
    name: '',
    sprites: {
      front_default: ''
    },
    types: []
  }

  constructor(
    private service: PokemonServiceService


  ) { }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(search: string) {

    this.service.getPokemon(search).subscribe({
      next: (res) => {

        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types

        }

        console.log(this.pokemon)
      },
      error: (err) => console.log(err)
    })
    console.log(search)
  }
}
