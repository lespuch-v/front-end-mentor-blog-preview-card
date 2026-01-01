import { Component } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  imports: [],
  templateUrl: './card-footer.component.html',
  styleUrl: './card-footer.component.scss'
})
export class CardFooterComponent {
    profileImage: string = 'image-avatar.webp';
    profileName: string = 'Greg Hooper'
}
