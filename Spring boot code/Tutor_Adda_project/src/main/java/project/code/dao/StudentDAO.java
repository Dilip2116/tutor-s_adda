package project.code.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.code.entity.Courses;
import project.code.entity.Student;
import project.code.entity.Teacher;
import project.code.repository.StudentRepository;

@Service
public class StudentDAO {

	
	@Autowired
	StudentRepository studentRepository;
	
	public void deletestudent(int id) {
		studentRepository.deleteById(id);
	}
	
	
	public List<Student> getAll() {
		List<Student> tlist;
		tlist=studentRepository.findAll();
		return tlist;
	}
	
	

	//to add new STUDENT
		public Student addstudent(Student student ) {

			studentRepository.save(student);
			return  student;
		}


		public Student varifystudent(String uname, String pass) {
			List<Student> tlist;
			
			tlist=studentRepository.findAll();
			for(Student t : tlist)
			{
				if(t.getStudent_password().equals(pass) && t.getStudent_username().equals(uname))
				{
					return t;
				}
			}
	  return null;
		}


		public int getcount() {
			int n =studentRepository.studentcount();
			return n ;
		}

//
//		public List<Courses> coursesbystudentid(int id) {
//			List<Courses>courses = new ArrayList<Courses>();
//			courses = studentRepository.getcoursebystudentid(id);
//			return courses;
//		}

		
	
}
