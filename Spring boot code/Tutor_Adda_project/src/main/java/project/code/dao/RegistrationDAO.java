package project.code.dao;

import org.springframework.beans.factory.annotation.Autowired;

import project.code.entity.Registration;
import project.code.repository.RegistrationRepository;

public class RegistrationDAO {

	@Autowired
	RegistrationRepository registrationrepository;
	
	public Registration addregistration(Registration regi) {
		Registration r=new Registration();
		r.setCourse_id(regi.getCourse_id());
		r.setStudent_id(regi.getStudent_id());
		
		registrationrepository.save(r);
		return r;
	}

}
