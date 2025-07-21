import { Component, OnInit } from '@angular/core';
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
import { CardComponent } from "../home/components/card/card.component";
import { FlipcardComponent } from "./components/flipcard/flipcard.component";

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
    FlipcardComponent
],
})
export class TemaPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
