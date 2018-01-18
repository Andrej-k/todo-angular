import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';

@Injectable()
export class ItemService {

    public todos:any;

    constructor() {
        this.todos = [
            {
                completed: false,
                id: 0,
                newTodo: "get a job :)"
            }
        ];
    }

    getData(id:number) {
        return of(this.todos.find(item => item.id === id));
    }

}
