package project.code.repository;




import java.sql.Time;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import project.code.entity.Courses;


@Repository
public interface CoursesRepository extends JpaRepository<Courses, Integer> {

	@Query(value="select count(course_id) from courses;",nativeQuery=true)
	public int coursecount();

	@Query(value="select * from courses where course_teacher_id=:tid and :date between course_start_date and course_end_date;",nativeQuery=true)
	public List<Courses> coursebydate(@PathVariable("date") String date ,@PathVariable("tid") int tid);

	@Query(value=" select * from courses where course_id in (select course1_id from registration where student1_id=:sid ) and :date between course_start_date and course_end_date ;",nativeQuery=true)
	public List<Courses> coursebydatestudent(@PathVariable("date") String date ,@PathVariable("sid") int sid);



	@Query(value="select * from courses where course_teacher_id=:tid and ((:startdate between course_start_date and course_end_date) or (:enddate between course_start_date and course_end_date)) and ((:starttime between course_start_time and course_end_time) or( :endtime between course_start_time and course_end_time)) ;",nativeQuery=true)
	public List<Courses> verifynewcourse(@PathVariable("startdate") Date startdate,@PathVariable("enddate") Date enddate ,@PathVariable("starttime") String starttime,@PathVariable("endtime") String endtime,@PathVariable("tid") int tid);

	@Query(value="select * from courses where course_teacher_id=:tid and curdate() between course_start_date and course_end_date and curtime() < course_start_time order by course_start_time limit 1;",nativeQuery=true)
	public Courses upcomming_course_teahcer(@PathVariable("tid") int tid);
	
	@Query(value="select * from courses where course_id in(select course1_id from registration where student1_id=:sid ) and curdate() between course_start_date and course_end_date and curtime() < course_start_time order by course_start_time limit 1; ",nativeQuery=true)
	public Courses upcomming_course_student(@PathVariable("sid") int sid);
	
	@Query(value="select * from courses where course_id in(select course1_id from registration where student1_id=:sid );",nativeQuery=true)
	public List<Courses> getcoursebystudentid(@PathVariable("sid") int sid);
}
