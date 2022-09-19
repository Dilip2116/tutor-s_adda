package project.code.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

import project.code.entity.Review;


public interface ReviewRepository extends JpaRepository<Review, Integer> {

	@Query(value="select avg(second_rating) from review where course_id=:id",nativeQuery=true)
	public int getreview2(@PathVariable("id") int id);
	@Query(value="select avg(third_rating) from review where course_id=:id",nativeQuery=true)
	public int getreview3(@PathVariable("id") int id);
	@Query(value="select avg(fourth_rating) from review where course_id=:id",nativeQuery=true)
	public int getreview4(@PathVariable("id") int id);
	@Query(value="select avg(fifth_rating) from review where course_id=:id",nativeQuery=true)
	public int getreview5(@PathVariable("id") int id);
	

}
