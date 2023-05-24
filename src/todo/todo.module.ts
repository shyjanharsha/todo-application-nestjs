import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.services';

@Module({
//   imports: [],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule { }
