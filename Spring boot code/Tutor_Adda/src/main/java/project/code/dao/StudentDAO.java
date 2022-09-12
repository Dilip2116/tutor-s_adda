package project.code.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.code.entity.Student;

import project.code.repository.StudentRepository;

@Service
public class StudentDAO {

	
	@Autowired
	StudentRepository studentRepository;
	
	public void delete(int id) {
		studentRepository.deleteById(id);
	}
	
	
	public List<Student> getAll() {
		List<Student> tlist;
		tlist=studentRepository.findAll();
		return tlist;
	}
	
	public Optional<Student> get(int id) {
		return Optional.ofNullable(studentRepository.findById(id).get());
	}

	//to add new STUDENT
		public Student addstudent(Student student ) {

			studentRepository.save(student);
			return  student;
		}

	
}