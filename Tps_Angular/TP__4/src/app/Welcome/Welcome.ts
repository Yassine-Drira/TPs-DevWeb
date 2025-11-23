import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Importer FormsModule
import { CommonModule } from '@angular/common'; // utile pour *ngIf

@Component({
  selector: 'app-Welcome',
  standalone: true, // ✅ déclare qu’il s’agit d’un composant standalone
  imports: [CommonModule, FormsModule], // ✅ ajoute les modules nécessaires
  templateUrl: './Welcome.html',
  styleUrls: ['./Welcome.css'],
})
export class Welcome {
  isLoggedIn = false;
  username = '';
  readonly correctName = 'yassine';

  basculer(): void {
    if (!this.isLoggedIn && this.username === this.correctName) {
      this.isLoggedIn = true;
    } else if (this.isLoggedIn) {
      this.isLoggedIn = false;
      this.username = '';
    } else {
      alert('Nom incorrect. Veuillez entrer votre prénom exact.');
    }
  }
}
