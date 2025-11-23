import { Component, signal } from '@angular/core';
import { Bienvenue } from "./bienvenue/bienvenue";
import { Utilisateur } from './utilisateur/utilisateur';
import { Panier } from './panier/panier';

@Component({
  selector: 'app-root',
  imports: [Bienvenue, Utilisateur, Panier],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tp3');
}
