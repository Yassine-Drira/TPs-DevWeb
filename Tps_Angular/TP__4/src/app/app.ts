import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Welcome} from './Welcome/Welcome';
import {Articles} from './articles/articles';
import {Produits} from './produits/produits';
import {Taches} from './taches/taches';

@Component({
  selector: 'app-root',
  imports: [Welcome,Articles,Produits,Taches],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tp4');
}
