package project.code.controller;



import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import project.code.dao.FileDAO;
import project.code.dao.TeacherDAO;
import project.code.entity.Teacher;
import project.code.repository.TeacherRepository;
import project.code.response.ResponseMessage;

@CrossOrigin
@RestController
public class TeacherController {


	@Autowired
	FileDAO image;


	@Autowired
	TeacherDAO dao;


	
	@GetMapping("/getteacher")  //get all registered teacher
	public List<Teacher> getteacher()  
	{
		List<Teacher> LTeacher;
		LTeacher=this.dao.getAll();
		return LTeacher;
	}

	@GetMapping("/getteacher/{id}") //get registered teacher
	public Teacher getteacher (@PathVariable int id) 
	{
		Teacher teacher = new Teacher();
		teacher=this.dao.get(id);
		return teacher;
	}

	@DeleteMapping("/deleteteacher/{id}") //deleter teacher by teacher_id
	public void deleteTeacher(@PathVariable int id)
	{
		dao.deleteTeacher(id);
	}
//	
//	@PostMapping("/addteacher")        //Add new teacher
//	public Teacher addteacher( @RequestBody Teacher teacher)
//	{
//		this.dao.addteacher(teacher);
//		return teacher;
//	}

	@PostMapping("/addteacher")        //Add new teacher
	public boolean addnewteacher( @RequestBody Teacher teacher)
	{
		boolean add =dao.addnewteacher(teacher);
		return add;
	}
	
	
	@PostMapping("/updateteacher")   //update teacher details
	public boolean updateTeacher(@RequestBody Teacher teacher)
	{
		
	boolean t =dao.updateteacher(teacher);
		return t;
	}

	@PostMapping("/teacherlogin/{uname}/{pass}")  //login verification for teacher
	public Teacher getteacher (@PathVariable String uname,@PathVariable String pass) 
	{
		//Teacher teacher = new Teacher();
		Teacher teacher=dao.varifyteacher(uname,pass);


		return teacher;
	}


	@PostMapping("/teacherimage")        //Add image with teacher id
	public ResponseEntity<ResponseMessage>  addteacher( @RequestBody Teacher teacher,@RequestParam("file") MultipartFile file)
	{
		String message = "";
		try {
			this.dao.addteacher(teacher);
			image.store(file);

			message = "Uploaded the file successfully: " + file.getOriginalFilename();
			return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
		} catch (Exception e) {
			message = "Could not upload the file: " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
		}
	}

	@GetMapping("/teachercount")  //get the total number of registered teachers
	public int teachercount()
	{
		int n=dao.getcount();
		return n;
	}

	
	@PutMapping("/changeteacherpassword/{tid}/{oldpassword}/{newpassword}")
	public boolean changepassword(@PathVariable int tid,@PathVariable String oldpassword,@PathVariable String newpassword)
	{
		//Student stud = new Student();
		boolean teach = dao.verifyoldpassword(tid,oldpassword,newpassword);
	return teach;
	}

}
