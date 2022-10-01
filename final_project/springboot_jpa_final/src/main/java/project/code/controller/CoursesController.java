package project.code.controller;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
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

	@GetMapping("/getcourse")           //Get all available courses
	public List<Courses> getcourses()  
	{
		List<Courses> Lcourse ;

		Lcourse=this.dao.getAll();
		return Lcourse;
	}

	
	
	@GetMapping("/getcourse/{id}")    //Get all available courses by course id
	public Courses getteacher (@PathVariable int id) 
	{
		Courses course = new Courses();
		course=dao.get(id);
		return course; 
	}
	
	
	
	@GetMapping("/getcoursebyteacher/{id}")  //Get all courses of particular teacher by teacher_id

	public List<Courses> getByTeacherId(@PathVariable int id)  //Get by teachers
	{
		List<Courses> Lcourse ;

		Lcourse=dao.getByTeacherId(id);
		return Lcourse;
	}
	

	@GetMapping("/coursecount")  //get the total count of all courses
	public int coursecount()
	{
		int n=dao.getcount();
		return n;
	}

	
	
	@GetMapping("/getcoursebydate/{date}/{tid}")     //get course of particular teacher for a date
	public List<Courses>  getcoursebydate (@PathVariable String date,@PathVariable int tid) 
	{
		List<Courses> lcourse ;
		lcourse=dao.coursebydate(date ,tid);
		return lcourse;
	}

	

	@GetMapping("/getcoursebystudentdate/{date}/{sid}")  //get course of particular student for a date
	public List<Courses>  getcoursebydatestudent (@PathVariable String date,@PathVariable int sid) 
	{
		List<Courses> lcourse ;
		lcourse=dao.coursebydateforstudent(date ,sid);
		return lcourse;
	}
	
	
	//*******************************************************************************

	@DeleteMapping("/deletecourse/{id}")  //delete course by it's id
	public void deletecourse(@PathVariable int id)
	{
		dao.deletecourse(id);
	}

	
	
	@JsonDeserialize(using = LocalDateDeserializer.class)
	@JsonSerialize(using = LocalDateSerializer.class)
	@PostMapping("/addcourse")       
	public Courses addcourse(@RequestBody Courses course)   //Add new course
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

	
	
	@PostMapping("/updatecourse")   //update course   //update course details
	public Courses updatecourse(@RequestBody Courses c)
	{
		Courses course = new Courses();
		course =dao.updatecourse(c);
		return course;
	}

	@PostMapping("/updatecoursefee/{id}/{fee}")   //update course fee
	public Courses updatecoursefee(@PathVariable int id,@PathVariable int fee)
	{
		Courses  course =dao.updatecoursefee(id,fee);
		return course;
	}

	

	@PostMapping("/varifynewcourse")   //Add new course by checking availability of time slot
	public boolean  varifynewaddedcourse (@RequestBody Courses course) 
	{
		Date startdate=course.getCourse_start_date();
		Date enddate=course.getCourse_end_date();
		String starttime=course.getCourse_start_time().toString();
		String endtime=course.getCourse_end_time().toString();
		int tid = course.getCourse_teacher_id();

		boolean addcourse = dao.verifynewcourse(startdate,enddate,starttime,endtime,tid);
		if(addcourse)
		{
			dao.addcourse(course);
			return addcourse;
		}
		else 
			return addcourse;
	}

	
	
	@GetMapping("/upcommingcourse/{tid}") //return upcoming course of particular teacher
	public Courses  teacherupcommingcourse (@PathVariable int tid) 
	{
		Courses course ;
		course=dao.teacherupcommingcourse(tid);
		return course;
	}
	
	@GetMapping("/upcommingstudentcourse/{sid}") //return upcoming course of particular student
	public Courses  studentupcommingcourse (@PathVariable int sid) 
	{
		Courses course ;
		course=dao.studentupcommingcourse(sid);
		return course;
	}
	
	
	
	
@GetMapping("/coursesbystudentid/{id}")
public List<Courses> coursesbystudentid(@PathVariable int id)
{
	List<Courses>courses = new ArrayList<Courses>();
	courses =dao.coursesbystudentid(id);
	return courses;
}
}
