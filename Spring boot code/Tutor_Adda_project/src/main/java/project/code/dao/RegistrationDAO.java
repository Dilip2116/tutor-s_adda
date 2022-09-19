package project.code.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.code.entity.Registration;
import project.code.repository.RegistrationRepository;

@Service
public class RegistrationDAO {

	@Autowired
	RegistrationRepository registrationrepository;
	
	public Registration newregistration(Registration regi) {
		Registration r=new Registration();
		r.setCourse1_id(regi.getCourse1_id());
		r.setStudent1_id(regi.getStudent1_id());
		
		registrationrepository.save(r);
		return r;
	}

	public Registration newregistration(int c, int s) {
		Registration r=new Registration();
		r.setCourse1_id(c);
		r.setStudent1_id(s);
		return r;
	}

	public List<Registration> gettall() {
		List<Registration> obj = registrationrepository.findAll();
		return null;
	}

}
