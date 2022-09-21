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
	
@GetMapping("/reviewbycourse/{id}")
public List<Integer> reviewbycourse(@PathVariable int id)
{
	List<Integer> review =new ArrayList<Integer>();
	review=dao.reviewbycourse(id);
	return review;
	
}

@GetMapping("/teacherreview/{id}")
public int teacherreview(@PathVariable int id)
{
	int rating =dao.teacherreview1(id);
	return rating;
}


}
