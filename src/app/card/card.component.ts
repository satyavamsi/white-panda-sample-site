import { Component, OnInit, Input } from '@angular/core';
import { card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: card;

  constructor() { }

  ngOnInit() {
  }

}
