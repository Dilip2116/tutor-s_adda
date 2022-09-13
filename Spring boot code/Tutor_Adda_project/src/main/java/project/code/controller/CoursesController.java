package project.code.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import project.code.dao.CourseDAO;
import project.code.entity.Courses;


	

@RestController
public class CoursesController {


	@Autowired
	CourseDAO dao;
	

	@PostMapping("/addcourse")        //Add new teacher
	public Courses addcourse(@RequestBody Courses course)
	{
		dao.addcourse(course);
		return course;
	}
		
	@GetMapping("/getcourse")
	
	public List<Courses> getcourses()  //Get all teachers
	{
		List<Courses> Lcourse ;
	
		Lcourse=this.dao.getAll();
		return Lcourse;
	}
	
	@GetMapping("/getcourse/{id}")
	public Courses getteacher (@PathVariable int id) 
	{
		Courses course = new Courses();
		course=dao.get(id);
		return course; 
	}
	
	@DeleteMapping("/deletecourse/{id}")
	public void deletecourse(@PathVariable int id)
	{
		dao.deletecourse(id);
	}

    @PostMapping("/updatecourse")
	public Courses updatecourse(@RequestBody Courses c)
	{
    	Courses course = new Courses();
    	course =dao.updatecourse(c);
    	return course;
	}



}
