package project.code.repository;




import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import project.code.entity.Student;
import project.code.entity.Teacher;


@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
//	
////	 @Query("select teacher_fname from teacher  where teacher_id =:id")
////	 public String findteacher(@Param("id") int id);
//		
	@Query(value="select count(teacher_id) from teacher;",nativeQuery=true)
	public int teachercount();
	
	
//	@Query(value="select * from teacher where teacher.teacher_id=:teacher_id;",nativeQuery=true)
//	public Teacher findteach(@PathVariable("teacher_id") int teacher_id);
	@Modifying
	@Transactional
	@Query(value="update teacher set teacher_password=:newpass where teacher_id=:tid ;",nativeQuery=true)
		public void changePass(@PathVariable("tid") int tid,@PathVariable("newpass") String newpass);

	@Query(value="select * from teacher where teacher_id=:tid and teacher_password=:oldpass ;",nativeQuery =true )
	public List<Teacher> verifypass(@PathVariable("tid") int tid,@PathVariable("oldpass") String oldpass);

	@Query(value="select * from teacher where teacher_username=:uname or teacher_mobile=:mob or teacher_email=:email ;",nativeQuery=true)
	public List<Teacher> addnewteacher(@PathVariable("uname") String uname,@PathVariable("mob") String mob,@PathVariable ("email") String email);


	
}

