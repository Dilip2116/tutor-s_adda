package project.code.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import project.code.entity.Student;



@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
	
	@Query(value="select count(student_id) from student;",nativeQuery=true)
	public int studentcount();
	
	@Query(value="select course1_id from registration where student1_id=:id ;",nativeQuery=true)
	public List<Integer> getcoursebystudentid(@PathVariable("id") int id);
}
