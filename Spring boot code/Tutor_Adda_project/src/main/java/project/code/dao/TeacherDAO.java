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
		
	public List<Teacher> getAll() {
		List<Teacher> tlist;
		tlist=teacherRepository.findAll();
		return tlist;
	}

	public Teacher get(int id) {
		return (teacherRepository.findById(id).get());
	}

	//to add new teacher
	public Teacher addteacher(Teacher teacher ) {

		teacherRepository.save(teacher);
		return  teacher;
}
	
	public void deleteTeacher(int id) {
		teacherRepository.deleteById(id);
	}

	public Teacher updateteacher(Teacher teacher)
	{
		Teacher updateTeacher = teacherRepository.findById(teacher.getTeacherId()).get();
		
		updateTeacher.setTeacher_fname(teacher.getTeacher_fname());
		updateTeacher.setTeacher_lname(teacher.getTeacher_lname());
		updateTeacher.setTeacher_mobile(teacher.getTeacher_mobile());
		updateTeacher.setTeacher_gender(teacher.getTeacher_gender());
		updateTeacher.setTeacher_username(teacher.getTeacher_username());
		updateTeacher.setTeacher_password(teacher.getTeacher_password());
		updateTeacher.setTeacher_email(teacher.getTeacher_email());
		updateTeacher.setTeacher_qualification(teacher.getTeacher_qualification());
		updateTeacher.setTeacher_experience(teacher.getTeacher_experience());
		updateTeacher.setTeacher_about(teacher.getTeacher_about());
		updateTeacher.setAddress(teacher.getAddress());

		teacherRepository.save(updateTeacher);
		
		return updateTeacher;
	}

	
	
	public Teacher  varifyteacher(String uname, String pass)
	{
	
		List<Teacher> tlist;
				
		tlist=teacherRepository.findAll();
		for(Teacher t : tlist)
		{
			if(t.getTeacher_password().equals(pass) && t.getTeacher_username().equals(uname))
			{
				return t;
			}
		}
  return null;
	}

}
