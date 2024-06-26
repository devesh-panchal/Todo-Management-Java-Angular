package com.example.main.todos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="http://localhost:4200")
@RestController()
public class TodosController {
	
	
	@Autowired
	private TodoHardcodedService todoService;
	
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoService.findAll();
	}
	
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username,@PathVariable Long id ){
		return todoService.findById(id);
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username,@PathVariable Long id, @RequestBody Todo  todo ){
		Todo todoUpdated = todoService.save(todo);
		return new ResponseEntity<Todo>(todoUpdated,HttpStatus.OK);
		
		 
	}
	
	@PostMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> createTodo(@PathVariable String username,@PathVariable Long id, @RequestBody Todo  todo ){
		Todo todoUpdated = todoService.save(todo);
		return new ResponseEntity<Todo>(todoUpdated,HttpStatus.OK);
		
		 
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		
		
		Todo todo = todoService.deleteTodoById(id);
		
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		else
		{
			return ResponseEntity.notFound().build();

		}
		
	}
	

}
