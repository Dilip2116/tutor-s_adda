package project.code.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.relational.core.mapping.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
public class Teacher 
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )

	@Column()
	private int teacher_id;

	private String teacher_fname;

	private String teacher_lname;

	private String teacher_mobile;

	private String teacher_gender;

	private String teacher_username;

	private String teacher_password;

	private String teacher_email;

	private String teacher_qualification;

	public int getTeacher_id() {
		return teacher_id;
	}
	public void setTeacher_id(int teacher_id) {
		this.teacher_id = teacher_id;
//	}
//	public FileDB getImage() {
//		return image;
//	}
//	public void setImage(FileDB image) {
//		this.image = image;
	}

	private int teacher_experience;

	private String teacher_about;

	@OneToOne(cascade = CascadeType.ALL)
	private Address address;
	
//	@OneToOne(cascade = CascadeType.ALL)//for image
//	private FileDB image;

//	public List<Courses> getCourse() {
//		return course;
//	}

//	@JsonIgnore
//	@OneToMany(cascade=CascadeType.ALL)
//	@JoinTable(
//			name = "course_teacher",
//			joinColumns = @JoinColumn(name = "teacher_id"),
//			inverseJoinColumns = @JoinColumn(name = "course_id")
//			)
//	private List<Courses> course;

	@JsonIgnore
	 @OneToMany(mappedBy = "teacher",cascade = CascadeType.ALL)

		private List<Courses> course;


	//all field
	public Teacher(int teacherId, String teacher_fname, String teacher_lname, String teacher_mobile,
			String teacher_gender, String teacher_username, String teacher_password, String teacher_email,
			String teacher_qualification, int teacher_experience, String teacher_about, Address address,
			List<Courses> course) {
		super();
		this.teacher_id = teacherId;
		this.teacher_fname = teacher_fname;
		this.teacher_lname = teacher_lname;
		this.teacher_mobile = teacher_mobile;
		this.teacher_gender = teacher_gender;
		this.teacher_username = teacher_username;
		this.teacher_password = teacher_password;
		this.teacher_email = teacher_email;
		this.teacher_qualification = teacher_qualification;
		this.teacher_experience = teacher_experience;
		this.teacher_about = teacher_about;
		this.address = address;
		this.course = course;
	}
	//without id
	public Teacher( String teacher_fname, String teacher_lname, String teacher_mobile,
			String teacher_gender, String teacher_username, String teacher_password, String teacher_email,
			String teacher_qualification, int teacher_experience, String teacher_about, Address address,
			List<Courses> course) {
		super();

		this.teacher_fname = teacher_fname;
		this.teacher_lname = teacher_lname;
		this.teacher_mobile = teacher_mobile;
		this.teacher_gender = teacher_gender;
		this.teacher_username = teacher_username;
		this.teacher_password = teacher_password;
		this.teacher_email = teacher_email;
		this.teacher_qualification = teacher_qualification;
		this.teacher_experience = teacher_experience;
		this.teacher_about = teacher_about;
		this.address = address;
		this.course = course;
	}

	public Teacher(int teacherId, String teacher_fname, String teacher_lname, String teacher_mobile,
			String teacher_gender, String teacher_username, String teacher_password, String teacher_email,
			String teacher_qualification, int teacher_experience, String teacher_about, Address address)
	{
		super();
		this.teacher_id = teacherId;
		this.teacher_fname = teacher_fname;
		this.teacher_lname = teacher_lname;
		this.teacher_mobile = teacher_mobile;
		this.teacher_gender = teacher_gender;
		this.teacher_username = teacher_username;
		this.teacher_password = teacher_password;
		this.teacher_email = teacher_email;
		this.teacher_qualification = teacher_qualification;
		this.teacher_experience = teacher_experience;
		this.teacher_about = teacher_about;
		this.address = address;
		//this.course = course;
	}

	//all field
	public Teacher( String teacher_fname, String teacher_lname, String teacher_mobile,
			String teacher_gender, String teacher_username, String teacher_password, String teacher_email,
			String teacher_qualification, int teacher_experience, String teacher_about, Address address
			) {
		super();
		this.teacher_fname = teacher_fname;
		this.teacher_lname = teacher_lname;
		this.teacher_mobile = teacher_mobile;
		this.teacher_gender = teacher_gender;
		this.teacher_username = teacher_username;
		this.teacher_password = teacher_password;
		this.teacher_email = teacher_email;
		this.teacher_qualification = teacher_qualification;
		this.teacher_experience = teacher_experience;
		this.teacher_about = teacher_about;
		this.address = address;
		this.course = null;
	}
	
	

	public Teacher(String teacher_fname, String teacher_lname, String teacher_mobile, String teacher_gender,
			String teacher_username, String teacher_password, String teacher_email, String teacher_qualification,
			int teacher_experience, String teacher_about, Address address, FileDB image) {
		super();
		this.teacher_fname = teacher_fname;
		this.teacher_lname = teacher_lname;
		this.teacher_mobile = teacher_mobile;
		this.teacher_gender = teacher_gender;
		this.teacher_username = teacher_username;
		this.teacher_password = teacher_password;
		this.teacher_email = teacher_email;
		this.teacher_qualification = teacher_qualification;
		this.teacher_experience = teacher_experience;
		this.teacher_about = teacher_about;
		this.address = address;
		//this.image = image;
	}
	public void setCourse(List<Courses> course) {
		this.course = course;
	}
	public Teacher() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getTeacherId() {
		return teacher_id;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public void setTeacherId(int teacherId) {
		this.teacher_id = teacherId;
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

	public String getTeacher_mobile() {
		return teacher_mobile;
	}

	public void setTeacher_mobile(String teacher_mobile) {
		this.teacher_mobile = teacher_mobile;
	}

	public String getTeacher_gender() {
		return teacher_gender;
	}

	public void setTeacher_gender(String teacher_gender) {
		this.teacher_gender = teacher_gender;
	}

	public String getTeacher_username() {
		return teacher_username;
	}

	public void setTeacher_username(String teacher_username) {
		this.teacher_username = teacher_username;
	}

	public String getTeacher_password() {
		return teacher_password;
	}

	public void setTeacher_password(String teacher_password) {
		this.teacher_password = teacher_password;
	}

	public String getTeacher_email() {
		return teacher_email;
	}

	public void setTeacher_email(String teacher_email) {
		this.teacher_email = teacher_email;
	}

	public String getTeacher_qualification() {
		return teacher_qualification;
	}

	public void setTeacher_qualification(String teacher_qualification) {
		this.teacher_qualification = teacher_qualification;
	}

	public int getTeacher_experience() {
		return teacher_experience;
	}

	public void setTeacher_experience(int teacher_experience) {
		this.teacher_experience = teacher_experience;
	}

	public String getTeacher_about() {
		return teacher_about;
	}

	public void setTeacher_about(String teacher_about) {
		this.teacher_about = teacher_about;
	}






}