package project.code.dao;

import java.util.ArrayList;
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

	

		public int teacherreview1(int id)
		{
			int n = reviewRepository.teacherreview(id);
			return n;
		}
		public List<Integer> reviewbycourse(int id)
		{
			List<Integer> review =new ArrayList<Integer>();
	//		int n=reviewRepository.getreview2(id);

			review.add(reviewRepository.getreviews2(id));
			review.add(reviewRepository.getreviews3(id));
			review.add(reviewRepository.getreviews4(id));
			review.add(reviewRepository.getreviews5(id));
			int n =reviewRepository.getreviews3(id);
			return review;
		}
		
		public Boolean addrenewview(Review review ) {
List<Review> lr;
lr=reviewRepository.addnewreview(review.getStudent_id(),review.getCourse_id());
if (lr.isEmpty())
{
	reviewRepository.save(review);
	return true;
}
else
	return false;
			
			
		}

		
}
