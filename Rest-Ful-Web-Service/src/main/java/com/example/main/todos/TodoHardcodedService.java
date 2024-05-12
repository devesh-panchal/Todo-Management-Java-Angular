package com.example.main.todos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static Long idCounter = (long) 0;
	
	static {
		todos.add(new Todo(++idCounter, "devesh","Learn to Gaming", new Date(), false ));
		todos.add(new Todo(++idCounter, "devesh","Learn about Microservices", new Date(), false ));
		todos.add(new Todo(++idCounter, "devesh","Learn about Angular", new Date(), false ));
	}

	public List<Todo> findAll() {
		// TODO Auto-generated method stub
		return todos;
	}

	public Todo deleteTodoById(long id) {
		// TODO Auto-generated method stub
		
		Todo todo = findById(id);
		
		
		if(todo == null)
		{
			return null;
		}
		else if (todos.remove(todo)) {
			return todo;
		}
		else {
			return null;
		}
	
	}

	public Todo findById(long id) {
		// TODO Auto-generated method stub
		
		for(Todo todo:todos) {
			if(todo.getId()==id)
			{
				return todo;
			}
		}
		return null;
	}

	public Todo save(Todo todo) {
		// TODO Auto-generated method stub
		
	
			if(todo.getId()==-1)
			{
				todo.setId(++idCounter);
				todo.setDone(false);
				todos.add(todo);
			}
			else
			{
				deleteTodoById(todo.getId());
				todos.add(todo);
			}
			return todo;
			
		
		
	
	}

}
