package project.code.dao;


import java.util.List;
import java.util.Optional;

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

	//to add new teacher
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
}
