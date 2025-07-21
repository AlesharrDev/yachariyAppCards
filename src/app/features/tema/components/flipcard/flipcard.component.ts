import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-flipcard',
  templateUrl: './flipcard.component.html',
  styleUrls: ['./flipcard.component.scss'],
  imports: [IonCardTitle, IonCard, IonCardHeader, IonCardContent, CommonModule],
})
export class FlipcardComponent implements OnInit {
  @Input() frontText: string = 'Frente de la tarjeta';
  @Input() frontSubtitle?: string;
  @Input() backText: string = 'Reverso de la tarjeta';
  @Input() backSubtitle?: string;

  isFlipped: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
