package project.code.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import project.code.dao.ReviewDAO;

import project.code.entity.Review;
import project.code.repository.ReviewRepository;

@CrossOrigin
@RestController
public class ReviewController {




	@Autowired
	ReviewDAO dao;

	@GetMapping("/getreview") //get all reviews
	public List<Review> getreview()
	{
		List<Review> LReview;

		LReview=dao.getAll();
		return LReview;
	}


	@DeleteMapping("/deletereview/{id}") //delete review by id
	public void deletereview(@PathVariable int id)
	{
		dao.deletereview(id);
	}

	
	
	@GetMapping("/reviewbycourse/{id}") //get all reviews for particular course
	public List<Integer> reviewbycourse(@PathVariable int id)
	{
		List<Integer> review =new ArrayList<Integer>();
		review=dao.reviewbycourse(id);
		return review;
	}

	
	@GetMapping("/teacherreview/{id}") //get reviews for particular teacher
	public int teacherreview(@PathVariable int id)
	{
		int rating =dao.teacherreview1(id);
		return rating;
	}

	@PostMapping("/addreview") //add new reviews 
	public boolean addreview(@RequestBody Review review)
	{
		boolean bool=dao.addrenewview(review);
		return bool;
	}

}
