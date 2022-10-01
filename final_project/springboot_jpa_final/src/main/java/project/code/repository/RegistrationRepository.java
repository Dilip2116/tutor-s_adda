package project.code.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import project.code.entity.CompositeRegister;
import project.code.entity.Registration;



@Repository
public interface RegistrationRepository extends JpaRepository<Registration, CompositeRegister> {

	@Query(value="select * from registration where course1_id=:c and student1_id=:s",nativeQuery=true)
	public Registration findByStudent1_idAndCourse1_id(@PathVariable("c") int c,@PathVariable("s") int s);
}


