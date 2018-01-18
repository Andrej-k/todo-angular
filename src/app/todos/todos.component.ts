import {Component} from '@angular/core';
import {Item} from "../item";
import {ItemService} from "../item.service";


@Component({
    selector: 'todos',
    templateUrl: 'todos.component.html',
    styleUrls: ['./todos.component.css']
})

export class TodosComponent{

    currentId: number;
    currentItem: string;
    newTodo: string;
    id: number;
    todoObj: any;


    constructor(private itemService: ItemService) {
        this.newTodo = '';
        this.id = 1;
        this.currentId = (localStorage.getItem('currentId')!==null) ? JSON.parse(localStorage.getItem('currentId')) : [ 1 ];
        this.id = this.currentId;
        // this.currentItem = (localStorage.getItem('currentItem')!==null) ? JSON.parse(localStorage.getItem('currentItem')) : [  ];
        // this.itemService.todos = this.currentItem;
    }

    addTodo(event) {
        this.todoObj = {
            newTodo: this.newTodo,
            id: this.id,
            completed: false
        };
        this.itemService.todos.push(this.todoObj);
        console.log(this.itemService.todos);
        this.newTodo = '';
        this.id++;
        localStorage.setItem('currentId', JSON.stringify(this.id));
        localStorage.setItem('currentItem', JSON.stringify(this.itemService.todos));
        event.preventDefault();
    }

    deleteTodo(index) {
        this.itemService.todos.splice(index, 1);
    }

    deleteSelectedTodos() {
        for (var i = (this.itemService.todos.length - 1); i > -1; i--) {
            if (this.itemService.todos[i].completed) {
                this.itemService.todos.splice(i, 1);
            }
        }
    }

}
