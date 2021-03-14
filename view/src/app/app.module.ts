import {routing} from "./app.routing";
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import {NavbarComponent} from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SobreComponent,
        ButtonComponent,
        NavbarComponent,
    ],
    imports: [
        routing,
        NgbModule,
        FormsModule,
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
