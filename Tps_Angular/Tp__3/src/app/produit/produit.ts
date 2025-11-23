import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-produit',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './produit.html',
  styleUrl: './produit.css'
})
export class Produit {
  // Chemin de l'image à afficher pour ce produit (utilisé par le template)
  imageUrl: string = 'assets/images/produit1.jpg';

  // Indique si le produit est en stock; cela influe sur la classe et le style affichés
  enStock: boolean = true;

  // Nom du produit transmis par le composant parent (s'il existe)
  @Input() nomProduit: string = '';

  
  prix: number = 1299.99;

  // When adding, send both name and price to the parent
  @Output() ajouterAuPanier: EventEmitter<{ nom: string; prix: number }> = new EventEmitter<{ nom: string; prix: number }>();

  basculerStock() {
    this.enStock = !this.enStock;
  }

  afficherAlerte() {
    alert('Produit ajouté au panier');
  }
  
  ajouterProduit(): void {
    this.ajouterAuPanier.emit({ nom: this.nomProduit || 'Produit', prix: this.prix });
  }

}
