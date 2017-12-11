package com.repository;
import com.entity.About;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface AboutRepository extends CrudRepository<About, Long> {
	 List<About> findByUsername(String username);
}
