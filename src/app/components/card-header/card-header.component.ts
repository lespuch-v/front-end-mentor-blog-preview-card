import { Component } from '@angular/core';

@Component({
    selector: 'app-card-header',
    imports: [],
    templateUrl: './card-header.component.html',
    styleUrl: './card-header.component.scss'
})
export class CardHeaderComponent {
    imageBlogPostPath: string = 'illustration-article.svg';
    datePublished = new Date();
    formattedDate = `Published ${this.datePublished.toLocaleDateString('en', {
        day: 'numeric', month: 'short', year: 'numeric'
    })}`;

}
