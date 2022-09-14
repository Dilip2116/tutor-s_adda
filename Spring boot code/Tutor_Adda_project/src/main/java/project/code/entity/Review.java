package project.code.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.data.relational.core.mapping.Table;


@Entity
@Table(name="review_info")
public class Review {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private int ReviewId;
	private int first_rating;
	private int second_rating;
	private int third_rating;
	private int fourth_rating;
	private int fifth_rating;
	
	@ManyToOne
	@JoinColumn(name="course_id")
	private Courses course;
	
	@ManyToOne
	@JoinColumn(name="student_id")
	private Student student;
	
	
	public int getReviewId() {
		return ReviewId;
	}



	public void setReviewId(int reviewId) {
		ReviewId = reviewId;
	}



	public Courses getCourse() {
		return course;
	}



	public void setCourse(Courses course) {
		this.course = course;
	}



	public Student getStudent() {
		return student;
	}



	public void setStudent(Student student) {
		this.student = student;
	}
	
	
	
	public Review() {
		super();
		// TODO Auto-generated constructor stub
	}
		
	//all field
	public Review(int reviewId, int first_rating, int second_rating, int third_rating, int fourth_rating,
			int fifth_rating, Courses course, Student student) {
		super();
		ReviewId = reviewId;
		this.first_rating = first_rating;
		this.second_rating = second_rating;
		this.third_rating = third_rating;
		this.fourth_rating = fourth_rating;
		this.fifth_rating = fifth_rating;
		this.course = course;
		this.student = student;
	}

	public int getFirst_rating() {
		return first_rating;
	}
	public void setFirst_rating(int first_rating) {
		this.first_rating = first_rating;
	}
	public int getSecond_rating() {
		return second_rating;
	}
	public void setSecond_rating(int second_rating) {
		this.second_rating = second_rating;
	}
	public int getThird_rating() {
		return third_rating;
	}
	public void setThird_rating(int third_rating) {
		this.third_rating = third_rating;
	}
	public int getFourth_rating() {
		return fourth_rating;
	}
	public void setFourth_rating(int fourth_rating) {
		this.fourth_rating = fourth_rating;
	}
	public int getFifth_rating() {
		return fifth_rating;
	}
	public void setFifth_rating(int fifth_rating) {
		this.fifth_rating = fifth_rating;
	}
		
}
