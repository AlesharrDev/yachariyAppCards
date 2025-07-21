import { Injectable } from '@angular/core';
import { Tema } from 'src/app/core/models/card'; // Asegúrate de importar Tema
import { TEMAS } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private temasdata: Tema[] = TEMAS; // <-- Usa Tema[] aquí
  constructor() {}
  getTemas(): Tema[] {
    // <-- Usa Tema[] aquí
    return this.temasdata;
  }
  getTemaById(id: string): Tema | undefined {
    // <-- Usa Tema aquí
    return this.temasdata.find((tema) => tema.id === id);
  }
}
