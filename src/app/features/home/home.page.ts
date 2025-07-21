import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CardComponent } from "./components/card/card.component";
import { ContentService } from 'src/app/core/services/content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CardComponent
  ],
})
export class HomePage {
  temas = inject(ContentService).getTemas();
  constructor() {
    console.log(this.temas)
  }

}
