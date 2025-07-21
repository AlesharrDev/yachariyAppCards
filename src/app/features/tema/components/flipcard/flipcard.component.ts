import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { Card } from 'src/app/core/models/card';

@Component({
  selector: 'app-flipcard',
  templateUrl: './flipcard.component.html',
  styleUrls: ['./flipcard.component.scss'],
  imports: [IonCardTitle, IonCard, IonCardHeader, CommonModule],
})
export class FlipcardComponent implements OnInit, OnChanges {
  @Input() card?: Card;

  espanol: string = '';
  quechua: string = '';
  description: string = '';
  isFlipped: boolean = false;

  ngOnInit() {
    this.setCardData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['card']) {
      this.setCardData();
      this.isFlipped = false; // Opcional: reinicia el estado al cambiar de card
    }
  }

  setCardData() {
    if (this.card) {
      this.espanol = this.card.title || '';
      this.quechua = this.card.subtitle || '';
      this.description = this.card.description || '';
    }
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
