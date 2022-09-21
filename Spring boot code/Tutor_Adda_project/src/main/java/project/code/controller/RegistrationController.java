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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import project.code.dao.RegistrationDAO;
import project.code.dao.StudentDAO;
import project.code.entity.Registration;
import project.code.entity.Student;
import project.code.entity.Teacher;
import project.code.repository.RegistrationRepository;


@CrossOrigin
@RestController
public class RegistrationController {

	@Autowired
	RegistrationRepository registrationrepository;

	@Autowired
	RegistrationDAO dao;


	@GetMapping("/getregister") //THis will give list of object with student id and theire joined course id
	public List<Registration> getall() 
	{
		List<Registration> obj = registrationrepository.findAll();
		return obj;
	}

	@PostMapping("/register")
	public boolean addstudent2(@RequestBody Registration regi)
	{
		boolean r = dao.ispresent(regi);
		if(r)
		{
			Registration r1 =new Registration();
			r1 = dao.newregistration(regi);
		}
		return r;
	}
}



