import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [IonCardTitle, IonCardHeader, IonCard],
})
export class CardComponent {
  @Input() title: string = 'Título de la tarjeta';
  @Input() temaid: string = '';
  @Input() temaimage?: string = '';
  constructor(private router: Router) {}

  goToTema() {
    this.router.navigate(['/tema', this.temaid]);
  }
}
