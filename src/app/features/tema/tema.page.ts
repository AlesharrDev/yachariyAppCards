import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { IonBackButton } from '@ionic/angular/standalone';
import { CardComponent } from '../home/components/card/card.component';
import { FlipcardComponent } from './components/flipcard/flipcard.component';
import { ContentService } from 'src/app/core/services/content.service';
import { ActivatedRoute } from '@angular/router';
import { Card, Tema } from 'src/app/core/models/card';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.page.html',
  styleUrls: ['./tema.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonBackButton,
    FlipcardComponent,
  ],
})
export class TemaPage implements OnInit {
  private contentService = inject(ContentService);
  private temaid: string | null = null;
  private route = inject(ActivatedRoute);
  cards: Card[] = [];
  constructor() {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const tema = this.contentService.getTemaById(id);
      if (tema) {
        this.cards = tema.cards;
        console.log(this.cards);

      }
    }
  }
}
