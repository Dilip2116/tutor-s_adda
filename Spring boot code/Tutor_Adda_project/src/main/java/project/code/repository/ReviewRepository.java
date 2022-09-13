package project.code.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import project.code.entity.Review;


public interface ReviewRepository extends JpaRepository<Review, Integer> {

}
