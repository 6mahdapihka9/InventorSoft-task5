import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }
  defHttp = 'https://pokeapi.co/api/v2/';
  getFrom200Till300 = 'pokemon?limit=100&offset=0';

  getData(): any{
    console.log('invoked');
    return this.http.get(this.defHttp + this.getFrom200Till300);
  }
  getPokemonsImg(url: string): any{
    console.log('invoked 2');
    return this.http.get(url);
  }
}
