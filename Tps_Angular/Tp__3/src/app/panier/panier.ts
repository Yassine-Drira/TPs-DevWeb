import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../produit/produit';

export interface PanierItem {
  nom: string;
  prix: number;
}

@Component({
  selector: 'app-panier',
  imports: [CommonModule, Produit],
  templateUrl: './panier.html',
  styleUrl: './panier.css'
})
export class Panier {
  messages: string[] = [];
  panierItems: PanierItem[] = [];

  gererAjout(message: string) {
    // Historique (ancienne méthode) : on enregistre le message et on affiche une alerte
    this.messages.push(message);
    alert(message);
  }

  gererAjoutAuPanier(item: PanierItem): void {
    this.panierItems.push(item);
    console.log(`${item.nom} ajouté au panier pour ${item.prix} EUR.`);
  }
}
