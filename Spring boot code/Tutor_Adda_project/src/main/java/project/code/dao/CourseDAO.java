package project.code.dao;


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
		
	public List<Courses> getAll() {
		List<Courses> tlist;
		tlist=coursesRepository.findAll();
		return tlist;
	}

	public Courses get(int id) {
		return (coursesRepository.findById(id).get());
	}

	
	public Courses addcourse(Courses course ) {

		coursesRepository.save(course);
		return  course;
}
	
	public void deletecourse(int id) {
		coursesRepository.deleteById(id);
	}

	public Courses updatecourse(Courses course)
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
	
	//course by teacher id
	public List<Courses> getByTeacherId(int id) {
		List<Courses> tlist;
		tlist=coursesRepository.findAll().stream().filter((co)->co.getTeacher().getTeacherId()==id).collect(Collectors.toList()); ;
		return tlist;
	}

	public Courses updatecoursefee(int id, int fee) {
		Courses c =coursesRepository.findById(id).get();
		c.setCourse_fee(fee);
		coursesRepository.save(c);
		return c;
			}
	}
