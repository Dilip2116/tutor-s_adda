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

	//delete student by student id
	public void deletestudent(int id) {
		studentRepository.deleteById(id);
	}

	//get list of all registered students
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

	public Student updatestudent(Student student)
	{
		Student updateStudent = studentRepository.findById(student.getStudentId()).get();



		updateStudent.setAddress(student.getAddress());
		updateStudent.setStudent_fname(student.getStudent_fname());
		updateStudent.setStudent_lname(student.getStudent_lname());
		updateStudent.setStudent_mobile(student.getStudent_mobile());
		updateStudent.setStudent_gender(student.getStudent_gender());
		updateStudent.setStudent_username(student.getStudent_username());
		updateStudent.setStudent_dob(student.getStudent_dob());
		updateStudent.setStudent_password(student.getStudent_password());
		updateStudent.setStudent_email(student.getStudent_email());

		studentRepository.save(updateStudent);
		return updateStudent;

	}

	public Student getstudentbyid(int sid) 
	{
		Student stud =studentRepository.findById(sid).get();
		return stud;
	}

	public boolean verifyoldpassword(int sid,String oldpass, String newpass)
	{

		List <Student> lstud=studentRepository.verifypass(sid , oldpass );
		if(lstud.isEmpty())
		{
			return false;
		}
		else
		{
			studentRepository.changePass(sid,newpass);
			return true;
		}
	}

	public boolean addnewstudent(Student student) {
			String uname=student.getStudent_username();
			String mob=student.getStudent_mobile();
			String email=student.getStudent_email();
			List<Student> lstudent=studentRepository.addnewstudent(uname,mob,email);

			if(lstudent.isEmpty())
			{
				studentRepository.save(student);
				return true;
			}
			else
			{
				return false;
			}
		}
	


}
