import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taches',
  imports: [CommonModule,FormsModule],
  templateUrl: './taches.html',
  styleUrl: './taches.css',
})
export class Taches {
   taches = [
    { description: 'Analyser les logs du modèle ML', completee: false, priorite: 'haute' },
    { description: 'Préparer le rapport hebdomadaire des ventes', completee: true, priorite: 'moyenne' },
    { description: 'Optimiser la page produit pour la conversion', completee: false, priorite: 'basse' }
  ];

  // Champs pour nouvelle tâche
  nouvelleDescription = '';
  nouvellePriorite = 'basse';

  // Ajouter une tâche
  ajouterTache(): void {
    if (this.nouvelleDescription.trim()) {
      this.taches.push({
        description: this.nouvelleDescription,
        completee: false,
        priorite: this.nouvellePriorite
      });
      this.nouvelleDescription = '';
      this.nouvellePriorite = 'basse';
    } else {
      alert('Veuillez entrer une description.');
    }
  }

  // Bascule le statut complétée/non complétée
  basculerStatut(tache: any): void {
    tache.completee = !tache.completee;
  }

  // Détermine la couleur selon la priorité
  getCouleur(priorite: string): string {
    // Respect des couleurs obligatoires : 'red' / 'orange' / 'green'
    switch (priorite) {
      case 'haute':
        return 'red';
      case 'moyenne':
        return 'orange';
      default:
        return 'green';
    }
  }

}
