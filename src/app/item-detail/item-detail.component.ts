import {Component, OnInit, Input} from '@angular/core';
import { Item } from '../item';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { ItemService }  from '../item.service';

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent implements OnInit {

    newTodo:string;
    id:number;
    details:string;

    @Input() item: Item = {
        id: this.id,
        newTodo: this.newTodo,
        details: this.details
    };

    constructor(private route: ActivatedRoute, private itemService: ItemService, private location: Location) {}

    ngOnInit(): void {
        this.getData();
    }

    getData(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.itemService.getData(id)
            .subscribe(item => this.item = item);
    }

    goBack(): void {
        this.location.back();
    }

}
