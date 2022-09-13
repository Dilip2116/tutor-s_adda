package project.code.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.code.entity.Review;

import project.code.repository.ReviewRepository;


@Service
public class ReviewDAO {
	
	
	@Autowired
	ReviewRepository reviewRepository;
	
	
	//to delete
	public void deletereview(int id) {
		reviewRepository.deleteById(id);
	}
	
	//fetching all data
	public List<Review> getAll() {
		List<Review> tlist;
		tlist=reviewRepository.findAll();
		return tlist;
	}
	
	public Optional<Review> get(int id) {
		return Optional.ofNullable(reviewRepository.findById(id).get());
	}

	//to add new review
		public Review addreview(Review review ) {

			reviewRepository.save(review);
			return  review;
		}

}
