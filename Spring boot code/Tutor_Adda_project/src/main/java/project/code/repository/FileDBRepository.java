package project.code.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.code.entity.FileDB;


@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String> {

}
