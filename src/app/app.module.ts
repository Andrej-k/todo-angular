import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


// import {AppComponent} from './app.component';
import {TodosComponent} from './todos/todos.component';


@NgModule({
    declarations: [
        TodosComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [TodosComponent]
})
export class AppModule {
}
