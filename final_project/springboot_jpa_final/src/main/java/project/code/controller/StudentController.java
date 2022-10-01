package project.code.controller;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


import project.code.dao.StudentDAO;
import project.code.entity.Courses;
import project.code.entity.Student;
import project.code.entity.Teacher;


@CrossOrigin
@RestController
public class StudentController {


	@Autowired
	StudentDAO dao;
	

	@GetMapping("/studentcount")  //get the total number of students in system
	public int studentcount()
	{
		int n=dao.getcount();
		return n;
	}

	
	@GetMapping("/getstudent")  //get all registered students
	public List<Student> getstudent()
	{
		List<Student> LStudent;

		LStudent=dao.getAll();
		return LStudent;
	}

	
	@DeleteMapping("/deletestudent/{id}")  //delete review by student id
	public void deletestudent(@PathVariable int id)
	{
		dao.deletestudent(id);
	}

	
	@PostMapping("/studentlogin/{uname}/{pass}") //login details verification
	public Student getteacher (@PathVariable String uname,@PathVariable String pass) 
	{
		Student student=dao.varifystudent(uname,pass);
		System.out.println(student.getStudent_lname());
		return student;
	}

	
//	@PostMapping("/addstudent") //add new student into database
//	public Student addstudent(@RequestBody Student student)
//	{
//		this.dao.addstudent(student);
//		return student;
//	}
	

	@PostMapping("/addstudent")        //Add new teacher
	public boolean addstudent(@RequestBody Student student)
	{
		boolean add =dao.addnewstudent(student);
		return add;
	}

	@PostMapping("/updatestudent")   //update student details
	public Student updateTeacher(@RequestBody Student student)
	{
		Student s = new Student();
		s =dao.updatestudent(student);
		return s;
	}

	@GetMapping("/studentbyid/{sid}")
	public Student studentbyid(@PathVariable int sid)
	{
		Student stud = new Student();
		stud = dao.getstudentbyid(sid);
		return stud;
		}
	
	@PutMapping("/changestudentpassword/{sid}/{oldpassword}/{newpassword}")
	public boolean changepassword(@PathVariable int sid,@PathVariable String oldpassword,@PathVariable String newpassword)
	{
		//Student stud = new Student();
		boolean stud = dao.verifyoldpassword(sid,oldpassword,newpassword);
	return stud;
	}

}
