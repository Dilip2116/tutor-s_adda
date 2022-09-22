package project.code.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.code.entity.Registration;
import project.code.repository.RegistrationRepository;

@Service
public class RegistrationDAO {

	@Autowired
	RegistrationRepository registrationrepository;


	//stores information of student id and corresponding courses id;
	public Registration newregistration(Registration regi) 
	{
		Registration r=new Registration();
		r.setCourse1_id(regi.getCourse1_id());
		r.setStudent1_id(regi.getStudent1_id());
		registrationrepository.save(r);
		return r;
	}

	//stores information of student id and corresponding courses id;
	public Registration newregistration(int c, int s) {
		Registration r=new Registration();
		r.setCourse1_id(c);
		r.setStudent1_id(s);
		return r;
	}

	//get all students id with corresponding course id 
	public List<Registration> gettall() {
		List<Registration> obj = registrationrepository.findAll();
		return null;
	}


	//checks whether student is already registered to particular courses or not
	public boolean ispresent(Registration regi) {

		Registration r = registrationrepository.findByStudent1_idAndCourse1_id(regi.getCourse1_id(),regi.getStudent1_id());
		if(r==null)
			return true;

		else return false;
	}

}
