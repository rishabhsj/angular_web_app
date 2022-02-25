import { Component, OnInit } from '@angular/core';

@Component({
    selector:'authors',
    template: `
    <h2> {{ title }} </h2>
    <ul>
        <li *ngFor="let author of authors">
        {{ author }}
        </li>
    </ul>
    `
})

export class AuthorsComponent {
  title = 'List of authors: '
    authors =["author1", "author2", "author3"];
}
