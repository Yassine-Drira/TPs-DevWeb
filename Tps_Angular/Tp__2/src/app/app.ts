import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Utilisateur} from './utilisateur/utilisateur';
import {FormsModule} from '@angular/forms';
import {Profil} from './profil/profil';
import {Adresse} from './adresse/adresse';

@Component({
  selector: 'app-root',
  imports: [Utilisateur,FormsModule,Profil,Adresse],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
