package project.code.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import project.code.entity.CompositeRegister;
import project.code.entity.Registration;



@Repository
public interface RegistrationRepository extends JpaRepository<Registration, CompositeRegister> {
}


