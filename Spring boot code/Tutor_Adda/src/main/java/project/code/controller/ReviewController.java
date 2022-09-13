package project.code.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import project.code.dao.ReviewDAO;

import project.code.entity.Review;


@RestController
public class ReviewController {
	
	
	
	@Autowired
	ReviewDAO dao;
	
	@PostMapping("/addreview")
	public Review addreview(@RequestBody Review review)
	{
		this.dao.addreview(review);
		return review;
	}
	
	
    @GetMapping("/getreview")
	public List<Review> getreview()
	{
		List<Review> LReview;
	
		LReview=dao.getAll();
		return LReview;

	}
    
    
    @DeleteMapping("/deletereview/{id}")
	public void deletereview(@PathVariable int id)
	{
		dao.deletereview(id);
	}
	

}
