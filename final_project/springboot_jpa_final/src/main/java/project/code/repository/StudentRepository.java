package project.code.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import project.code.entity.Courses;
import project.code.entity.Student;



@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

	@Query(value="select count(student_id) from student;",nativeQuery=true)
	public int studentcount();

@Modifying
@Transactional
@Query(value="update student set student_password=:newpass where student_id=:sid ;",nativeQuery=true)
	public void changePass(@PathVariable("sid") int sid,@PathVariable("newpass") String newpass);

	@Query(value="select * from student where student_id=:sid and student_password=:oldpass ;",nativeQuery =true )
	public List<Student> verifypass(@PathVariable("sid") int sid,@PathVariable("oldpass") String oldpass);

	@Query(value="select * from student where student_username=:uname or student_email=:email or student_mobile=:mob ;",nativeQuery =true)
	public List<Student> addnewstudent (@PathVariable("uname") String uname,@PathVariable("mob") String mob,@PathVariable ("email") String email);
}
