import { Component, OnInit } from '@angular/core';

import {card} from './card/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cards: card[];
  extraCards: card[];
  title = 'whitePandaApp';

  ngOnInit() {
    this.cards = [];
    this.extraCards = [];
    this.cards.push(new card('Blog Post', '400-500 Words','blog'));
    this.cards.push(new card('White Paper', '400-500 Words','paper'));
    this.cards.push(new card('Website Content', '400-500 Words','website'));
    this.cards.push(new card('Press Release', '400-500 Words','press'));
    this.cards.push(new card('Product Description', '400-500 Words','description'));
    this.cards.push(new card('Social Media', '400-500 Words','imedia'));
    this.cards.push(new card('Book/Story Writing', '400-500 Words','book'));
    this.cards.push(new card('Video Script', '400-500 Words','video'));
    this.cards.push(new card('News Letter', '400-500 Words','news'));
    this.cards.push(new card('Brochure Content', '400-500 Words','brochure'));
    this.cards.push(new card('Custom Content', '400-500 Words','custom'));
    this.cards.push(new card('Contest', '400-500 Words','contest'));

    this.extraCards.push(new card('Order from Template', 'You can give order from templates','template'));
    this.extraCards.push(new card('Order via Spreadsheets', 'Its useful when giving bulk order','spreadsheet'));
  }
}
