import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todos/todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  name: any;

  todo!: Todo;
  constructor(private todosService:TodosService,private router:ActivatedRoute,private routerNavigae:Router) { }

  ngOnInit(): void {

    

    this.name = sessionStorage.getItem('authenticaterUser')

    if(this.router.snapshot.params['id'] == -1){
      this.todo={description:"",targetDate:new Date(),username:this.name,id:this.router.snapshot.params['id']}
    }
    else{


    this.todosService.getTodo(this.name,this.router.snapshot.params['id']).subscribe(x=>{
      console.log(x);

      this.todo=x
      
    })
  }
  }

  saveTodo(){
    console.log(this.todo);

    if(this.router.snapshot.params['id'] == -1){

      this.todosService.createTodo(this.name,this.todo).subscribe(x=>{
        console.log(x);
        this.routerNavigae.navigate(['/todos'])
        
        
      })
    }else{

    this.todosService.updateTodo(this.name,this.todo).subscribe(x=>{
      console.log(x);
      this.routerNavigae.navigate(['/todos'])
      
      
    })
    
  }
}
}
