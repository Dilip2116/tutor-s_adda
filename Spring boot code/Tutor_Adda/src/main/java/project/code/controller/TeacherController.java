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



import project.code.dao.TeacherDAO;
import project.code.entity.Teacher;

@RestController
public class TeacherController {


	@Autowired
	TeacherDAO dao;
	

	@PostMapping("/addteacher")
	public Teacher addteacher(@RequestBody Teacher teacher)
	{
		this.dao.addteacher(teacher);
		return teacher;
	}
		
	@GetMapping("/getteacher")
	
	public List<Teacher> getteacher()
	{
		List<Teacher> LTeacher;
	
	    LTeacher=this.dao.getAll();
		return LTeacher;

	}


}
