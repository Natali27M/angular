import { ITodo } from './todo.interface';

export interface ITodoDetails extends ITodo {
  completed: boolean;
}
