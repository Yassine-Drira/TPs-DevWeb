import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  imports: [CommonModule, FormsModule],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  articles = [
    { titre: 'Nouveaux modèles de langage pour entreprise', contenu: 'Comparatif des LLM récents et applications en production (chat, recherche, documentation).', importance: 'élevée' },
    { titre: 'MLOps : pipelines robustes', contenu: 'Bonnes pratiques pour monitorer, tester et déployer des modèles ML en continu.', importance: 'moyenne' },
    { titre: 'Headless e‑commerce : pourquoi et comment', contenu: 'Avantages d’une architecture headless pour performances et personnalisation client.', importance: 'faible' }
  ];

  // Champs pour les nouveaux articles
  nouveauTitre = '';
  nouveauContenu = '';
   nouvelleImportance = 'faible';

  // Méthode d’ajout
  ajouterArticle(): void {
    if (this.nouveauTitre.trim() && this.nouveauContenu.trim()) {
      this.articles.push({
        titre: this.nouveauTitre,
        contenu: this.nouveauContenu,
        importance: this.nouvelleImportance
      });
      this.nouveauTitre = '';
      this.nouveauContenu = '';
      this.nouvelleImportance = 'faible';
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

}
