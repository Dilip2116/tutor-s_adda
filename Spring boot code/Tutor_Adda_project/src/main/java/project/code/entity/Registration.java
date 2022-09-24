package project.code.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data

@IdClass(CompositeRegister.class)
public class Registration 
{

	//	@GeneratedValue(strategy = GenerationType.IDENTITY )
	//	private int registration_id;
@Id
	private int student1_id;
@Id

	private int course1_id;

	//	public int getRegistration_id() {
	//		return registration_id;
	//	}
	//
	//	public void setRegistration_id(int registration_id) {
	//		this.registration_id = registration_id;
	//	}

	public int getStudent1_id() {
		return student1_id;
	}

	public void setStudent1_id(int student1_id) {
		this.student1_id = student1_id;
	}

	public Registration(int student1_id, int course1_id) {
		super();
		this.student1_id = student1_id;
		this.course1_id = course1_id;
	}

	public int getCourse1_id() {
		return course1_id;
	}

	public void setCourse1_id(int course1_id) {
		this.course1_id = course1_id;
	}

	//	public Registration(int registration_id, int student1_id, int course1_id) {
	//		super();
	//		this.registration_id = registration_id;
	//		this.student1_id = student1_id;
	//		this.course1_id = course1_id;
	//	}



	public Registration() {
		super();
		// TODO Auto-generated constructor stub
	}



}



