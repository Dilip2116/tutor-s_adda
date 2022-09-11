package project.code.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.relational.core.mapping.Table;

@Entity
@Table(name="teacher_info")
public class Teacher 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private int teacherId;
	
	private String teacher_fname;
	
	private String teacher_lname;

	public int getTeacherId() {
		return teacherId;
	}

	public void setTeacherId(int teacherId) {
		this.teacherId = teacherId;
	}

	public String getTeacher_fname() {
		return teacher_fname;
	}

	public void setTeacher_fname(String teacher_fname) {
		this.teacher_fname = teacher_fname;
	}

	public String getTeacher_lname() {
		return teacher_lname;
	}

	public void setTeacher_lname(String teacher_lname) {
		this.teacher_lname = teacher_lname;
	}

	public Teacher(int teacherId, String teacher_fname, String teacher_lname) {
		super();
		this.teacherId = teacherId;
		this.teacher_fname = teacher_fname;
		this.teacher_lname = teacher_lname;
	}

	public Teacher() {
		super();
		// TODO Auto-generated constructor stub
	}

//	private String teacher_mobile;
//	
//	private String teacher_gender;
//	
//	private String teacher_username;
//	
//	private String teacher_password;
//	
//	private String teacher_email;
//	
//	private String teacher_qualification;
//	
//	private int teacher_experience;
//	
//	private String teacher_about;





}