package com.example.main.hello_world;



import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController()
@RequestMapping(path = "/welcome")
public class HelloWorldController {
	
	
	@GetMapping(path = "/hello-world")
	public String HelloWorld() {
		return "hello world";
	}
	
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean HelloWorldBean(){
		
		//throw new RuntimeException("issue, pls contact");
		return new HelloWorldBean("Hello world bean");
	}
	
	@GetMapping("/{name}")
	public HelloWorldBean HelloWorldBeanName(@PathVariable String name){
		
		//throw new RuntimeException("issue, pls contact");
		return new HelloWorldBean("Hello world, "+name);
	}


}
