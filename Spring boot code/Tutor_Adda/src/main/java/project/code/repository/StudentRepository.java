package project.code.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.code.entity.Student;



@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
	

}
