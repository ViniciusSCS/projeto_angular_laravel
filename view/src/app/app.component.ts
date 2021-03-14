import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    // templateUrl: './app.component.html',
    // templateUrl: 'navbar/navbar.component.html',
    template: `
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'view';
}
