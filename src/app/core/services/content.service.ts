import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { TEMAS } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private temasdata: Card[]= TEMAS;
  constructor() { }
  getTemas(): Card[] {
    return this.temasdata;
  }

}
