package project.code.dao;




import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.code.entity.Teacher;
import project.code.repository.TeacherRepository;



@Service
public class TeacherDAO  {


	@Autowired
	TeacherRepository teacherRepository;

	public void delete(int id) {
		teacherRepository.deleteById(id);
	}

	

	public List<Teacher> getAll() {
		List<Teacher> tlist;
		tlist=teacherRepository.findAll();
		return tlist;
	}


	public Optional<Teacher> get(int id) {
		return Optional.ofNullable(teacherRepository.findById(id).get());
	}


	//to add new teacher
	public Teacher addteacher(Teacher teacher ) {

		teacherRepository.save(teacher);
		return  teacher;


}
}
