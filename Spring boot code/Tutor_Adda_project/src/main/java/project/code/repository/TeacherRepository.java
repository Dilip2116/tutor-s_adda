package project.code.repository;




import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import project.code.entity.Teacher;


@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
//	
////	 @Query("select teacher_fname from teacher  where teacher_id =:id")
////	 public String findteacher(@Param("id") int id);
//		
	@Query(value="select count(teacher_id) from teacher;",nativeQuery=true)
	public int teachercount();
	
	
	@Query(value="select * from teacher where teacher.teacher_id=:id;",nativeQuery=true)
	public Teacher findteach(@PathVariable("id") int id);



	

	
}

