package project.code.dao;




import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.support.DaoSupport;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import project.code.entity.Student;
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

	public boolean updateteacher(Teacher teacher)
	{

		Optional<Teacher> updateT= teacherRepository.findById(teacher.getTeacher_id());


		//		Teacher updateTeacher = teacherRepository.findteach(teacher.getTeacher_id());


		//Optional<Teacher> updateT= teacherRepository.findById(teacher.getTeacher_id());


		//		Teacher updateTeacher = teacherRepository.findteach(teacher.getTeacher_id());




		if(updateT.isPresent())
		{

			Teacher updateTeacher=updateT.get();


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
			return true;

		}
		return false;



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

	public int getcount() {
		int n = teacherRepository.teachercount();
		return n;
	}


	public boolean verifyoldpassword(int tid,String oldpass, String newpass)
	{

		List <Teacher> lteacher=teacherRepository.verifypass(tid , oldpass );
		if(lteacher.isEmpty())
		{
			return false;
		}
		else
		{
			teacherRepository.changePass(tid,newpass);
			return true;
		}
	}

	public boolean addnewteacher(Teacher teacher) {
		String uname=teacher.getTeacher_username();
		String mob=teacher.getTeacher_mobile();
		String email=teacher.getTeacher_email();
		List<Teacher> lteacher=teacherRepository.addnewteacher(uname,mob,email);

		if(lteacher.isEmpty())
		{
			teacherRepository.save(teacher);
			return true;
		}
		else
		{
			return false;
		}
	}
}
