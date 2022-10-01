package project.code.dao;


import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.code.entity.Courses;
import project.code.repository.CoursesRepository;


@Service
public class CourseDAO  {


	@Autowired
	CoursesRepository coursesRepository;

	public List<Courses> getAll() //list of all courses
	{ 
		List<Courses> tlist;
		tlist=coursesRepository.findAll();
		return tlist;
	}

	public Courses get(int id)  //get course details for particular course
	{
		return (coursesRepository.findById(id).get());
	}


	public Courses addcourse(Courses course ) //add new course
	{
		coursesRepository.save(course);
		return  course;
	}

	public void deletecourse(int id) //delete courses by course id
	{
		coursesRepository.deleteById(id);
	}

	public Courses updatecourse(Courses course)  //update course details
	{
		Courses updatecourse = coursesRepository.findById(course.getCourse_id()).get();

		updatecourse.setCourse_name(course.getCourse_name());
		updatecourse.setCourse_about(course.getCourse_about());
		updatecourse.setCourse_category(course.getCourse_category());
		updatecourse.setCourse_duration(course.getCourse_duration());
		updatecourse.setCourse_start_date(course.getCourse_start_date());
		updatecourse.setCourse_end_date(course.getCourse_end_date());
		updatecourse.setCourse_max_strenth(course.getCourse_max_strenth());
		updatecourse.setCourse_fee(course.getCourse_fee());
		updatecourse.setCourse_start_time(course.getCourse_start_time());
		updatecourse.setCourse_end_time(course.getCourse_end_time());

		coursesRepository.save(updatecourse);
		return updatecourse;
	}

	
	public List<Courses> getByTeacherId(int id) //get course by teacher id
	{
		List<Courses> tlist;
		tlist=coursesRepository.findAll().stream().filter((co)->co.getCourse_teacher_id()==id).collect(Collectors.toList()); ;
		return tlist;
	}

	public Courses updatecoursefee(int id, int fee) //Update the course fees
	{
		Courses c =coursesRepository.findById(id).get();
		c.setCourse_fee(fee);
		coursesRepository.save(c);
		return c;
	}

	public int getcount()  //get count of all registered courses
	{ 
		int n=coursesRepository.coursecount();
		return n;
	}

	public List<Courses> coursebydate(String date ,int tid) //get all available courses for particular date
	{
		List<Courses> lcourse ;
		lcourse=coursesRepository.coursebydate(date ,tid);
		return lcourse;
	}

	public List<Courses> coursebydateforstudent(String date ,int sid)  //List of courses for particular student for particular date
	{
		List<Courses> lcourse ;
		lcourse=coursesRepository.coursebydatestudent(date ,sid);
		return lcourse;
	}

	
	//verify available time slot 
	public boolean verifynewcourse(Date startdate,Date enddate,String starttime,String endtime ,int tid) 
	{
		List<Courses> lcourse ;
		lcourse=coursesRepository.verifynewcourse(startdate,enddate,starttime,endtime ,tid);
		if(lcourse.isEmpty())
		{return true;}
		else
			return false;

	}

	public Courses teacherupcommingcourse(int tid) //gives upcoming one course lecture for particular teacher 
	{
		Courses course;
		course=coursesRepository.upcomming_course_teahcer(tid);

		return course;
		
	}
	

	public List<Courses> coursesbystudentid(int id)  //get all courses by student id
	{
		List<Courses>courses = new ArrayList<Courses>();
		courses =coursesRepository.getcoursebystudentid(id);
		return courses;
	}

	
	public Courses studentupcommingcourse(int sid) //gives upcoming one course lecture for particular student 
	{
		Courses course;
		course=coursesRepository.upcomming_course_student(sid);

		return course;
		
	}


}
