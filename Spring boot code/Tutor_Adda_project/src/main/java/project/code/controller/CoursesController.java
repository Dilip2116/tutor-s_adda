package project.code.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

import project.code.dao.CourseDAO;
import project.code.entity.Courses;


	
@CrossOrigin(origins ="http://localhost:3000" )
@RestController
public class CoursesController {


	@Autowired
	CourseDAO dao;
	

	
	@GetMapping("/getcourse")
	
	public List<Courses> getcourses()  //Get all courses
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
	
	@JsonDeserialize(using = LocalDateDeserializer.class)
	  @JsonSerialize(using = LocalDateSerializer.class)
	@PostMapping("/addcourse")        //Add new teacher
	public Courses addcourse(@RequestBody Courses course)
	{
		dao.addcourse(course);
		return course;
	}
		
	@PostMapping("/addnewcourse")        //Add new course
	public Courses addnewcourse(@RequestBody Courses course)
	{
		dao.addcourse(course);
		return course;
	}
	
    @PostMapping("/updatecourse")   //update course
	public Courses updatecourse(@RequestBody Courses c)
	{
    	Courses course = new Courses();
    	course =dao.updatecourse(c);
    	return course;
	}

    @PostMapping("/updatecoursefee/{id}/{fee}")   //update fee
   	public Courses updatecoursefee(@PathVariable int id,@PathVariable int fee)
   	{
      Courses  course =dao.updatecoursefee(id,fee);
       return course;
     
   	}

	@GetMapping("/coursecount")
	public int coursecount()
	{
		int n=dao.getcount();
		return n;
	}
    
@GetMapping("/getcoursebydate/{date}/{tid}")
	public List<Courses>  getcoursebydate (@PathVariable String date,@PathVariable int tid) 
	{
	List<Courses> lcourse ;
	lcourse=dao.coursebydate(date ,tid);
	return lcourse;
}


@GetMapping("/getcoursebystudentdate/{date}/{sid}")
public List<Courses>  getcoursebydatestudent (@PathVariable String date,@PathVariable int sid) 
{
List<Courses> lcourse ;
lcourse=dao.coursebydateforstudent(date ,sid);
return lcourse;
}

}
