import {Component} from '@angular/core';


@Component({
    selector: 'todos',
    templateUrl: 'todos.component.html',
    styleUrls: ['./todos.component.css']
})

export class TodosComponent {

    newTodo:string;
    id:number;
    details:string;
    todos:any;
    todoObj:any;

    constructor() {
        this.newTodo = '';
        this.details = '';
        this.id = 0;
        this.todos = [];
    }

    selectedItem: Item = {
        id: this.id,
        name: this.newTodo,
        details: this.details
    };

    onSelect(selectedItem: Item): void {
        this.selectedItem = selectedItem;
    }

    addTodo(event) {
        this.todoObj = {
            newTodo: this.newTodo,
            id: this.id,
            completed: false
        };
        this.todos.push(this.todoObj);
        this.newTodo = '';
        this.id++;
        event.preventDefault();
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
    }

    deleteSelectedTodos() {
        //need ES5 to reverse loop in order to splice by index
        for (var i = (this.todos.length - 1); i > -1; i--) {
            if (this.todos[i].completed) {
                this.todos.splice(i, 1);
            }
        }
    }

}
