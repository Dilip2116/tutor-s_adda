package project.code.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.relational.core.mapping.Table;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
public class Student {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private int student_id;
	
    private String Student_fname;
	
	private String Student_lname;
	
	private String Student_mobile;
	
	private String Student_gender;
	
	private String Student_username;
	
//	@OneToOne(cascade = CascadeType.ALL)//for image
//	private FileDB image;
	
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date student_dob;
	
	public Date getStudent_dob() {
		return student_dob;
	}

	public void setStudent_dob(Date student_dob) {
		this.student_dob = student_dob;
	}

//	public List<Review> getReview() {
//		return review;
//	}
//
//	public void setReview(List<Review> review) {
//		this.review = review;
//	}

	private String Student_password;
	
	private String Student_email;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	private Address address;
	
	
	@JsonIgnore
	@ManyToMany
    @JoinTable(
            name = "course_student",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id")
    )
	private List<Courses> course;

	public List<Courses> getCourse() {
		return course;
	}

//	@JsonIgnore
//	@OneToMany(cascade=CascadeType.ALL, mappedBy = "student")
//	private List<Review> review;
	
	
	public void setCourse(List<Courses> course) {
		this.course = course;
	}

	
	//all field
	public Student(int student_id, String student_fname, String student_lname, String student_mobile,
			String student_gender, String student_username, Date student_dob, String student_password,
			String student_email, Address address, List<Courses> course) {
		super();
		this.student_id = student_id;
		Student_fname = student_fname;
		Student_lname = student_lname;
		Student_mobile = student_mobile;
		Student_gender = student_gender;
		Student_username = student_username;
		this.student_dob = student_dob;
		Student_password = student_password;
		Student_email = student_email;
		this.address = address;
		this.course = course;
		//this.review = review;
	}
	
	//without course and reviews 
	//all field
		public Student( String student_fname, String student_lname, String student_mobile,
				String student_gender, String student_username, Date student_dob, String student_password,
				String student_email, Address address) {
			super();
			
			Student_fname = student_fname;
			Student_lname = student_lname;
			Student_mobile = student_mobile;
			Student_gender = student_gender;
			Student_username = student_username;
			this.student_dob = student_dob;
			Student_password = student_password;
			Student_email = student_email;
			this.address = address;
			
		}
	//without id
//	public Student( String student_fname, String student_lname, String student_mobile,
//			String student_gender, String student_username, Date student_dob, String student_password,
//			String student_email, Address address, List<Courses> course) {
//		super();
//		
//		Student_fname = student_fname;
//		Student_lname = student_lname;
//		Student_mobile = student_mobile;
//		Student_gender = student_gender;
//		Student_username = student_username;
//		this.student_dob = student_dob;
//		Student_password = student_password;
//		Student_email = student_email;
//		this.address = address;
//		this.course = course;
//		//this.review = review;
//	}

	public Student(String student_fname, String student_lname, String student_mobile, String student_gender,
			String student_username, Date student_dob, String student_password, String student_email, Address address,
			List<Courses> course) {
		super();
		Student_fname = student_fname;
		Student_lname = student_lname;
		Student_mobile = student_mobile;
		Student_gender = student_gender;
		Student_username = student_username;
		this.student_dob = student_dob;
		Student_password = student_password;
		Student_email = student_email;
		this.address = address;
		this.course = course;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
	
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public int getStudentId() {
		return student_id;
	}

	public void setStudentId(int studentId) {
		student_id = studentId;
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

	

}
