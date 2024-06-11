import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private httpClient:HttpClient) { }

  getPokemon(pokemon:Number = Math.floor(Math.random()*100)){
    return(this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`))
  }
}
