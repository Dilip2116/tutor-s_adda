package project.code.entity;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.data.relational.core.mapping.Table;
import org.springframework.web.bind.annotation.CrossOrigin;


@Entity
public class Registration 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private int registration_id;

	public Registration() {
		super();
		// TODO Auto-generated constructor stub
	}

	private int student_id;

	private int course_id;

	public int getRegistration_id() {
		return registration_id;
	}

	public void setRegistration_id(int registration_id) {
		this.registration_id = registration_id;
	}

	public int getStudent_id() {
		return student_id;
	}

	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}

	public int getCourse_id() {
		return course_id;
	}

	public void setCourse_id(int course_id) {
		this.course_id = course_id;
	}

	public Registration(int student_id, int course_id) {
		super();
		this.student_id = student_id;
		this.course_id = course_id;
	}
}



