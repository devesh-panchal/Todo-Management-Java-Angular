import { Injectable } from '@angular/core';
import { Todo } from '../todos/todos.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) { }

  getTodos(name:string){
    return this.http.get<Todo[]>('http://localhost:8080/users/'+name+"/todos")

  }
  getTodo(name:string,id:number){
    return this.http.get<Todo>('http://localhost:8080/users/'+name+"/todos/"+id)

  }

  updateTodo(name:string,todo:Todo){
    return this.http.put<Todo>('http://localhost:8080/users/'+name+"/todos/"+todo.id,todo)

  }

  createTodo(name:string,todo:Todo){
    return this.http.post<Todo>('http://localhost:8080/users/'+name+"/todos/"+todo.id,todo)

  }


  deleteTodo(name:string, id:number)
  {
    return this.http.delete('http://localhost:8080/users/'+name+"/todos/"+id)
  }
}
