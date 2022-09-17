package project.code.dao;



import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import project.code.entity.FileDB;
import project.code.entity.Teacher;
import project.code.repository.FileDBRepository;

@Service
public class FileDAO {

	@Autowired
	private FileDBRepository fileDBRepository;

	public FileDB store2(MultipartFile file,int teacher) throws IOException {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		FileDB FileDB = new FileDB(teacher,fileName, file.getContentType(), file.getBytes());

		return fileDBRepository.save(FileDB);
	}

	public FileDB store(MultipartFile file) throws IOException {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		FileDB FileDB = new FileDB(fileName, file.getContentType(), file.getBytes());

		return fileDBRepository.save(FileDB);
	}

	public FileDB getFile(String id) {
		return fileDBRepository.findById(id).get();
	}

	public Stream<FileDB> getAllFiles() {
		return fileDBRepository.findAll().stream();
	}

	public Stream<FileDB> getteacherfile(int id) 
	{
		FileDB db = new FileDB();
		Stream<FileDB> st= fileDBRepository.findAll().stream().filter((img)->img.getTeacher()==id);
		return st;
	}
}

