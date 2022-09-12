package project.code.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.data.relational.core.mapping.Table;

@Entity
@Table(name="student_info")
public class Student {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private int StudentId;
	
    private String Student_fname;
	
	private String Student_lname;
	
	private String Student_mobile;
	
	private String Student_gender;
	
	private String Student_username;
	
	private String Student_password;
	
	private String Student_email;

	public int getStudentId() {
		return StudentId;
	}

	public void setStudentId(int studentId) {
		StudentId = studentId;
	}

	public String getStudent_fname() {
		return Student_fname;
	}

	public void setStudent_fname(String student_fname) {
		Student_fname = student_fname;
	}

	public String getStudent_lname() {
		return Student_lname;
	}

	public void setStudent_lname(String student_lname) {
		Student_lname = student_lname;
	}

	public String getStudent_mobile() {
		return Student_mobile;
	}

	public void setStudent_mobile(String student_mobile) {
		Student_mobile = student_mobile;
	}

	public String getStudent_gender() {
		return Student_gender;
	}

	public void setStudent_gender(String student_gender) {
		Student_gender = student_gender;
	}

	public String getStudent_username() {
		return Student_username;
	}

	public void setStudent_username(String student_username) {
		Student_username = student_username;
	}

	public String getStudent_password() {
		return Student_password;
	}

	public void setStudent_password(String student_password) {
		Student_password = student_password;
	}

	public String getStudent_email() {
		return Student_email;
	}

	public void setStudent_email(String student_email) {
		Student_email = student_email;
	}

	public Student(int studentId, String student_fname, String student_lname, String student_mobile,
			String student_gender, String student_username, String student_password, String student_email) {
		super();
		StudentId = studentId;
		Student_fname = student_fname;
		Student_lname = student_lname;
		Student_mobile = student_mobile;
		Student_gender = student_gender;
		Student_username = student_username;
		Student_password = student_password;
		Student_email = student_email;
	}

	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

	
	

	
	
	
	
	
	
	

}
