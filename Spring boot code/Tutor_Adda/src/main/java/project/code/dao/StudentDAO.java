package project.code.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.code.entity.Courses;
import project.code.entity.Student;

import project.code.repository.StudentRepository;

@Service
public class StudentDAO {

	
	@Autowired
	StudentRepository studentRepository;
	
	
	//------------------------------------------------------------------------------
	
	
	//delete student
	public void deletestudent(int id) {
		studentRepository.deleteById(id);
	}
	
	
	//------------------------------------------------------------------------------
	
	
	//Get student
	public List<Student> getAll() {
		List<Student> tlist;
		tlist=studentRepository.findAll();
		return tlist;
	}
	
	
	
	//------------------------------------------------------------------------------
	
	

		//Add new Student
		public Student addstudent(Student student ) {

			studentRepository.save(student);
			return  student;
		}

		
	
	//------------------------------------------------------------------------------
		
		
		
		//Update Student
		public Student updatestudent(Student student)
		{
			Student updatestudent = studentRepository.findById(student.getStudentId()).get();
			
			updatestudent.setStudent_fname(student.getStudent_fname());
			updatestudent.setStudent_lname(student.getStudent_lname());
			updatestudent.setStudent_gender(student.getStudent_gender());
			updatestudent.setStudent_mobile(student.getStudent_mobile());
			updatestudent.setStudent_email(student.getStudent_email());
			updatestudent.setStudent_username(student.getStudent_username());
			updatestudent.setStudent_password(student.getStudent_password());
			
			studentRepository.save(updatestudent);
			return updatestudent;
			
		}
		
		//------------------------------------------------------------------------------
		
		public Student get(int id) {
			return (studentRepository.findById(id).get());
		}
	
}
