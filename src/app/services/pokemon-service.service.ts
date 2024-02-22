import { Injectable } from '@angular/core';
import { environment } from '../../data/serve'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonData } from '../../data/pokemonData'

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private baseUrl: string = ""
  private pokeData: PokemonData | any


  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.pokeApi
  }

  getPokemon(pokemonName: string): Observable<PokemonData> {
    this.pokeData = this.http.get<PokemonData>(`${this.baseUrl}${pokemonName}`,)
    return this.pokeData
  }
}
