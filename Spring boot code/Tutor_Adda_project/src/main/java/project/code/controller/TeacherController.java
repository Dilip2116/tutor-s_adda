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



import project.code.dao.TeacherDAO;
import project.code.entity.Teacher;
import project.code.repository.TeacherRepository;

@CrossOrigin
@RestController
public class TeacherController {

	

	@Autowired
	TeacherDAO dao;
	
	
	@PostMapping("/addteacher")        //Add new teacher
	public Teacher addteacher( @RequestBody Teacher teacher)
	{
		this.dao.addteacher(teacher);
		return teacher;
	}
		
	@GetMapping("/getteacher")
	
	public List<Teacher> getteacher()  //Get all teachers
	{
		List<Teacher> LTeacher;
	
	    LTeacher=this.dao.getAll();
		return LTeacher;
	}
	
	@GetMapping("/getteacher/{id}")
	public Teacher getteacher (@PathVariable int id) 
	{
		Teacher teacher = new Teacher();
		teacher=this.dao.get(id);
	
	
		return teacher;
	}
	
	@DeleteMapping("/deleteteacher/{id}")
	public void deleteTeacher(@PathVariable int id)
	{
		dao.deleteTeacher(id);
	}

    @PostMapping("/updateteacher")
	public Teacher updateTeacher(@RequestBody Teacher teacher)
	{
    	Teacher t = new Teacher();
    	t =dao.updateteacher(teacher);
    	return t;
	}
    
    @PostMapping("/teacherlogin/{uname}/{pass}")
	public Teacher getteacher (@PathVariable String uname,@PathVariable String pass) 
	{
		//Teacher teacher = new Teacher();
    	Teacher teacher=dao.varifyteacher(uname,pass);
	

		return teacher;
	}

}
