import { Controller, Get } from '@nestjs/common';
import { TodoDTO } from './todo.dto';
import { todos } from './todo.db';
import { AppService } from 'src/app.service';
import { TodoService } from './todo.services';

let todosData = todos;

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Get()
    getTodos(): TodoDTO[] {
        // console.log('TodDto :>> ', TodoDTO.arguments);
        return this.todoService.getTodos();
    }

    
}
