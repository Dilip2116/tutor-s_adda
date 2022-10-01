package project.code.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import project.code.entity.Review;



@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {
	
	@Query(value="select avg(first_rating) from review where courseid in(select course_id from courses where course_teacher_id=:id ); ",nativeQuery=true)
	public List<Integer> teacherreview(@PathVariable("id") int id);
	
	@Query(value="select avg(second_rating) from review where courseid=:id",nativeQuery=true)
	public int getreviews2(@PathVariable("id") int id);
	
	@Query(value="select avg(third_rating) from review where courseid=:id",nativeQuery=true)
	public int getreviews3(@PathVariable("id") int id);
	
	@Query(value="select avg(fourth_rating) from review where courseid=:id",nativeQuery=true)
	public int getreviews4(@PathVariable("id") int id);
	
	@Query(value="select avg(fifth_rating) from review where courseid=:id",nativeQuery=true)
	public int getreviews5(@PathVariable("id") int id);
	
	@Query(value="select * from review where studentid=:sid and courseid=:cid",nativeQuery=true)
	public List<Review> addnewreview(@PathVariable ("sid") int sid,@PathVariable("cid") int cid);
}
