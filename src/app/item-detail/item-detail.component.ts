import {Component, OnInit, Input} from '@angular/core';
import {TodosComponent} from './../todos/todos.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent implements OnInit {

    newTodo:string;
    id:number;
    details:string;

    @Input() selectedItem: Item = {
        id: this.id,
        name: this.newTodo,
        details: this.details
    };

    constructor() {
        this.newTodo = '';
        this.details = '';
        this.id = 0;
    }

    // constructor(
    //     private route: ActivatedRoute,
    //     private location: Location
    // ) {}


    ngOnInit() {

    }

    // getHero(): void {
    //     const id = +this.route.snapshot.paramMap.get('id');
    //     this.heroService.getHero(id)
    //         .subscribe(hero => this.hero = hero);
    // }

    // goBack(): void {
    //     this.location.back();
    // }

}
