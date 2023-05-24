import { Injectable } from '@nestjs/common';
import { TodoDTO } from './todo.dto';
import { todos } from './todo.db';

@Injectable()
export class TodoService {
  private todos: TodoDTO[] = todos;

  getTodos(): TodoDTO[] {
    console.log('todo :>> ', "todo get method");

    return this.todos;
    // return `Success ${this.todos}`;
  }

  
}