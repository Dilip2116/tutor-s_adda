package project.code.entity;




import java.sql.Time;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import project.code.*;


@Entity
@Table(name="course_info")
public class Courses 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private int course_id;

	private String course_name;

	private String course_about;

	private String course_category;

    public int getCourse_teacher_id() {
		return course_teacher_id;
	}


	public void setCourse_teacher_id(int course_teacher_id) {
		this.course_teacher_id = course_teacher_id;
	}


	private int course_teacher_id; //course teacher id without relation
    
	private int course_duration;

	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date course_start_date;

	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date course_end_date;

//
//	public List<Review> getReview() {
//		return review;
//	}


//	public void setReview(List<Review> review) {
//		this.review = review;
//	}


	private int course_max_strenth;

	@Column(columnDefinition = "integer default 0")
	private int course_student_count;

	private int course_fee;

	@JsonDeserialize(using = SqlTimeDeserializer.class)
	@JsonFormat(pattern = "HH:mm")
	private Time course_start_time;

	@JsonIgnore
	@ManyToMany(mappedBy = "course")
	@LazyCollection(LazyCollectionOption.FALSE)
	private List<Student> students = new ArrayList<>();


	@JsonDeserialize(using = SqlTimeDeserializer.class)
	@JsonFormat(pattern = "HH:mm")
	private Time course_end_time;

	
	
//	@JsonBackReference
//	@JsonIgnore
	@ManyToOne(cascade=CascadeType.ALL ,fetch = FetchType.EAGER)
	@JoinColumn(name="teacher_id")
	private Teacher teacher;

//	
////	@JoinColumn(name="teacher_id",nullable=false,updatable=false,insertable=true)
//		@ManyToOne(fetch=FetchType.LAZY)
////		@JsonBackReference
//		private Teacher teacher;
		

//	@JsonIgnore
//	@OneToMany(cascade=CascadeType.ALL, mappedBy = "course")
//	private List<Review> review;




	//*************************************************************************************
	public Courses() {
		super();
		// TODO Auto-generated constructor stub
	}


	//all field
	public Courses(int course_id, String course_name, String course_about, String course_category, int course_duration,
			Date course_start_date, Date course_end_date, int course_max_strenth, int course_student_count,
			int course_fee, Time course_start_time, List<Student> students, Time course_end_time, Teacher teacher
	) {
		super();
		this.course_id = course_id;
		this.course_name = course_name;
		this.course_about = course_about;
		this.course_category = course_category;
		this.course_duration = course_duration;
		this.course_start_date = course_start_date;
		this.course_end_date = course_end_date;
		this.course_max_strenth = course_max_strenth;
		this.course_student_count = course_student_count;
		this.course_fee = course_fee;
		this.course_start_time = course_start_time;
		this.students = students;
		this.course_end_time = course_end_time;
		this.teacher = teacher;
	}


	
	public Courses(String course_name, String course_about, String course_category, int course_teacher_id,
			int course_duration, Date course_start_date, Date course_end_date, int course_max_strenth,
			int course_student_count, int course_fee, Time course_start_time, List<Student> students,
			Time course_end_time, Teacher teacher) {
		super();
		this.course_name = course_name;
		this.course_about = course_about;
		this.course_category = course_category;
		this.course_teacher_id = course_teacher_id;
		this.course_duration = course_duration;
		this.course_start_date = course_start_date;
		this.course_end_date = course_end_date;
		this.course_max_strenth = course_max_strenth;
		this.course_student_count = course_student_count;
		this.course_fee = course_fee;
		this.course_start_time = course_start_time;
		this.students = students;
		this.course_end_time = course_end_time;
		this.teacher = teacher;
	}


	public Courses(String course_name, String course_about, String course_category, int course_teacher_id,
			int course_duration, Date course_start_date, Date course_end_date, int course_max_strenth,
			int course_student_count, int course_fee, Time course_start_time, Time course_end_time) {
		super();
		this.course_name = course_name;
		this.course_about = course_about;
		this.course_category = course_category;
		this.course_teacher_id = course_teacher_id;
		this.course_duration = course_duration;
		this.course_start_date = course_start_date;
		this.course_end_date = course_end_date;
		this.course_max_strenth = course_max_strenth;
		this.course_student_count = course_student_count;
		this.course_fee = course_fee;
		this.course_start_time = course_start_time;
		this.course_end_time = course_end_time;
	}


	//*************************************************************************************


	public int getCourse_id() {
		return course_id;
	}






	public void setCourse_id(int course_id) {
		this.course_id = course_id;
	}






	public String getCourse_name() {
		return course_name;
	}






	public void setCourse_name(String course_name) {
		this.course_name = course_name;
	}






	public String getCourse_about() {
		return course_about;
	}






	public void setCourse_about(String course_about) {
		this.course_about = course_about;
	}






	public String getCourse_category() {
		return course_category;
	}






	public void setCourse_category(String course_category) {
		this.course_category = course_category;
	}






	public int getCourse_duration() {
		return course_duration;
	}






	public void setCourse_duration(int course_duration) {
		this.course_duration = course_duration;
	}






	public Date getCourse_start_date() {
		return course_start_date;
	}






	public void setCourse_start_date(Date course_start_date) {
		this.course_start_date = course_start_date;
	}






	public Date getCourse_end_date() {
		return course_end_date;
	}






	public void setCourse_end_date(Date course_end_date) {
		this.course_end_date = course_end_date;
	}






	public int getCourse_max_strenth() {
		return course_max_strenth;
	}






	public void setCourse_max_strenth(int course_max_strenth) {
		this.course_max_strenth = course_max_strenth;
	}






	public int getCourse_student_count() {
		return course_student_count;
	}






	public void setCourse_student_count(int course_student_count) {
		this.course_student_count = course_student_count;
	}






	public int getCourse_fee() {
		return course_fee;
	}






	public void setCourse_fee(int course_fee) {
		this.course_fee = course_fee;
	}






	public Time getCourse_start_time() {
		return course_start_time;
	}






	public void setCourse_start_time(Time course_start_time) {
		this.course_start_time = course_start_time;
	}






	public Time getCourse_end_time() {
		return course_end_time;
	}






	public void setCourse_end_time(Time course_end_time) {
		this.course_end_time = course_end_time;
	}


	public Teacher getTeacher() {
		return teacher;
	}


	public List<Student> getStudents() {
		return students;
	}


	public void setStudents(List<Student> students) {
		this.students = students;
	}


	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}










	//*************************************************************************************





}
