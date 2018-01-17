import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent } from './todos/todos.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'detail/:id', component: ItemDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
