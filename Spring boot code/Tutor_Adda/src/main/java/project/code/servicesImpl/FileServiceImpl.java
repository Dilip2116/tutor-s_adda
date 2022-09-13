package project.code.servicesImpl;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

import project.code.services.FileService;

public class FileServiceImpl implements FileService {

	@Override
	public String uploadImage(String path, MultipartFile file) throws IOException {
		
		//file name
		
		String name = file.getOriginalFilename();
		
		
		//random name generate file
		String randomID=UUID.randomUUID().toString();
		String fileName1= randomID.concat(name.substring(name.lastIndexOf(".")));
		
		
		return null;
	}

	@Override
	public InputStream getResource(String path, String fileName) throws FileNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

}
