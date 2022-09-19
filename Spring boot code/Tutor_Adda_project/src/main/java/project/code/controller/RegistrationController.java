package project.code.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import project.code.dao.RegistrationDAO;
import project.code.entity.Registration;


public class RegistrationController {

@CrossOrigin
@RestController
public class ReviewController {
	
	
	
	@Autowired
	RegistrationDAO dao;
	
	@PostMapping("/register")
	public Registration addreview(@RequestBody Registration regi)
	{
		Registration r =dao.addregistration(regi);
		return r;
	}
	
	
//    @GetMapping("/getreview")
//	public List<Review> getreview()
//	{
//		List<Review> LReview;
//	
//		LReview=dao.getAll();
//		return LReview;

	}
    
    
}
