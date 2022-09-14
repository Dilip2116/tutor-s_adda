package project.code.repository;




import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import project.code.entity.Courses;


@Repository
public interface CoursesRepository extends JpaRepository<Courses, Integer> {
	
	
}

