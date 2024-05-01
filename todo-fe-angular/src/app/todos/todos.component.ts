import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos-service.service';
import { ActivatedRoute, Route, Router, RouterStateSnapshot } from '@angular/router';

export interface Todo {
  id: number,
  description: string,
  done?: boolean,
  targetDate: Date,
  username: string
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[]
    // = [
    //   {id : 1, description : 'Learn to Dance',done:false, targetDate: new Date()},
    //   {id : 2, description : 'Become an Expert at Angular',done:false, targetDate: new Date()},
    //   {id : 3, description : 'Visit India',done:false, targetDate: new Date()}
    // ]
    = [];
  name: any = null
  message: string | undefined;

  // = [
  //   {id : 1, description : 'Learn to Dance',done:false, targetDate: new Date()},
  //   {id : 2, description : 'Become an Expert at Angular',done:false, targetDate: new Date()},
  //   {id : 3, description : 'Visit India',done:false, targetDate: new Date()}
  // ]

  constructor(private todosService: TodosService,private router:Router) { }

  ngOnInit(): void {

    this.name = sessionStorage.getItem('authenticaterUser')


    this.getAllTodos()





  }

  getAllTodos() {
    this.todosService.getTodos(this.name).subscribe((todos) => {
      this.todos = todos

      console.log(this.todos);



    })
  }

  addTodo(){
    this.router.navigate(['todo',-1])
  }

  updateTodo(id:number){
    this.router.navigate(['todo',id])
  }

  deleteTodo(id: any) {
    console.log(id);

    this.todosService.deleteTodo(this.name, id).subscribe(x => {
      console.log(x);

      this.message="deleted the todo id "+id

      this.getAllTodos()

    })

  }

}
