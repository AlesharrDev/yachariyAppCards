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
  IonFab,
  IonFabButton,
  IonIcon, IonModal } from '@ionic/angular/standalone';
import { IonBackButton } from '@ionic/angular/standalone';
import { CardComponent } from '../home/components/card/card.component';
import { FlipcardComponent } from './components/flipcard/flipcard.component';
import { ContentService } from 'src/app/core/services/content.service';
import { ActivatedRoute } from '@angular/router';
import { Card, Tema } from 'src/app/core/models/card';
import { addIcons } from 'ionicons';
import { add, sparklesOutline } from 'ionicons/icons';
import { PistaComponent } from "./components/pista/pista.component";
@Component({
  selector: 'app-tema',
  templateUrl: './tema.page.html',
  styleUrls: ['./tema.page.scss'],
  standalone: true,
  imports: [
    // IonModal,
    IonIcon,
    IonFabButton,
    IonFab,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonBackButton,
    FlipcardComponent,
    IonButton,
    PistaComponent
],
})
export class TemaPage implements OnInit {
  private contentService = inject(ContentService);
  private route = inject(ActivatedRoute);
  cards: Card[] = [];
  currentIndex: number = 0;
  temaTitulo: string = '';
  constructor() {
    console.log(`index: ${this.currentIndex}`);
    addIcons({
      add,
      sparklesOutline,
    });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const tema = this.contentService.getTemaById(id);
      if (tema) {
        this.temaTitulo = tema.title;
        this.cards = tema.cards;
        this.currentIndex = 0;
      }
    }
  }

  get currentCard(): Card | undefined {
    return this.cards[this.currentIndex];
  }
  private actualizarIndex(nuevoIndex: number) {
    if (nuevoIndex >= 0 && nuevoIndex < this.cards.length) {
      this.currentIndex = nuevoIndex;
      console.log('Actualizado index:', this.currentIndex);
    }
  }
  nextCard() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
      this.actualizarIndex(this.currentIndex);
      console.log('Next:', this.currentIndex);
    }
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      console.log('Prev:', this.currentIndex);
    }
  }
}
