import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        TodosComponent,
        ItemDetailComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
