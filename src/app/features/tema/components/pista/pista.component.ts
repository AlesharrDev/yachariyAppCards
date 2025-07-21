import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {
  IonFab,
  IonButton,
  IonModal,
  IonFabButton,
} from '@ionic/angular/standalone';
import { Card } from 'src/app/core/models/card';

@Component({
  selector: 'app-pista',
  templateUrl: './pista.component.html',
  styleUrls: ['./pista.component.scss'],
  imports: [IonModal],
})
export class PistaComponent implements OnInit {
  @Input() card?: Card;
  description = '';
  constructor() {}

  ngOnInit() {
    this.setCardData();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['card']) {
      this.setCardData();
      // this.isFlipped = false; // Opcional: reinicia el estado al cambiar de card
    }
  }
  setCardData() {
    if (this.card) {
      this.description = this.card.description || '';
    }
  }
}
