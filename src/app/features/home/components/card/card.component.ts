import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
export class CardComponent implements OnInit {
  @Input() title: string = 'Título de la tarjeta';
  @Input() temaid: string = '';
  constructor(private router: Router) {}
  ngOnInit() {}

  goToTema() {
    this.router.navigate(['/tema', this.temaid]);
  }
}
