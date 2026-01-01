import { Component } from '@angular/core';

@Component({
  selector: 'app-card-body',
  imports: [],
  templateUrl: './card-body.component.html',
  styleUrl: './card-body.component.scss'
})
export class CardBodyComponent {
  cardTitle: string = 'HTML & CSS foundations';
  cardText: string = 'These languages are the backbone of every website, defining structure, content, and presentation.'

}
