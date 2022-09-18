package project.code.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import project.code.dao.CourseDAO;
import project.code.entity.Courses;


	
@CrossOrigin(origins ="http://localhost:3000" )
@RestController
public class CoursesController {


	@Autowired
	CourseDAO dao;
	

	
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
@GetMapping("/getcoursebyteacher/{id}")
	
	public List<Courses> getByTeacherId(@PathVariable int id)  //Get by teachers
	{
		List<Courses> Lcourse ;
	
		Lcourse=dao.getByTeacherId(id);
		return Lcourse;
	}
	
//*******************************************************************************

	@DeleteMapping("/deletecourse/{id}")
	public void deletecourse(@PathVariable int id)
	{
		dao.deletecourse(id);
	}

	@PostMapping("/addcourse")        //Add new teacher
	public Courses addcourse(@RequestBody Courses course)
	{
		dao.addcourse(course);
		return course;
	}
		
	
    @PostMapping("/updatecourse")   //update teacher
	public Courses updatecourse(@RequestBody Courses c)
	{
    	Courses course = new Courses();
    	course =dao.updatecourse(c);
    	return course;
	}

    @PostMapping("/updatecoursefee/{id}/{fee}")   //update teacher
   	public void updatecoursefee(@PathVariable int id,@PathVariable int fee)
   	{
       dao.updatecoursefee(id,fee);
     
   	}

    


}
