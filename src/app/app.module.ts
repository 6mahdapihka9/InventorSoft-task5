import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AngularFireModule} from '@angular/fire';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { environment } from '../environments/environment.prod';
import { RouterModule, Routes } from '@angular/router';

// imports from github project bananastiia
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AngularSvgIconModule } from 'angular-svg-icon';
// import hw components
import { AlbumComponentComponent } from './album-component/album-component.component';
import { AppPokemonComponent } from './app-pokemon/app-pokemon.component';
import {ReactiveFormsModule} from '@angular/forms';



// routing by myself
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },
  {
    path: 'albums',
    component: AlbumComponentComponent,
    pathMatch: 'full'
  },
  {
    path: 'pokemons',
    component: AppPokemonComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/albums'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponentComponent,
    AppPokemonComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
