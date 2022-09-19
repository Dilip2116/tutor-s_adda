package project.code.controller;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.CrossOrigin;
=======
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
>>>>>>> 69039a3bfc5bc07334e16da9ed5039b5b6100c1d
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

<<<<<<< HEAD
@CrossOrigin
@RestController
public class ReviewController {
	
	
=======
	@Autowired
	RegistrationRepository registrationrepository;
>>>>>>> 69039a3bfc5bc07334e16da9ed5039b5b6100c1d
	
	@Autowired
	RegistrationDAO dao;

	@PostMapping("/register")
	public Registration addstudent(@RequestBody Registration regi)
	{
		Registration r =new Registration();
		r = dao.newregistration(regi);
		return r;
	}

	@GetMapping("/getregister")
	public List<Registration> getall()
	{
		List<Registration> obj = registrationrepository.findAll();
		return obj;
	}


}



