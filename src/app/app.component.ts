import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
        <mat-icon>menu</mat-icon>
      </button>
      <span>{{title}}</span>
      <a routerLink="/albums">Albums</a>
      <a routerLink="/pokemons">Pokemons</a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      mat-toolbar{
        padding: 12px;
        background-color: #3f51b5;
        color: white;
      }
      button{
        background-color: #3f51b5;
        color: white;
      }
      span{
        font: 500 20px/32px Roboto,Helvetica Neue,sans-serif;
        letter-spacing: normal;
      }
      a{
        color: white;
        margin-left: 100px;
      }
    `
  ]
})

export class AppComponent {
  title = 'Angular Service Training';
}
