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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


import project.code.dao.StudentDAO;
import project.code.entity.Student;


@RestController
public class StudentController {

	
	@Autowired
	StudentDAO dao;
	
	@PostMapping("/addstudent")
	public Student addstudent(@RequestBody Student student)
	{
		this.dao.addstudent(student);
		return student;
	}
	
	
    @GetMapping("/getstudents")
	public List<Student> getstudent()
	{
		List<Student> LStudent;
	
	    LStudent=dao.getAll();
		return LStudent;

	}
	
	
	
}
