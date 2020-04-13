package io.ljubisanesic.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import io.ljubisanesic.onlinebookstore.entity.Book;

@CrossOrigin("http://localhost:4200")
public interface BookRepository  extends JpaRepository<Book, Long>{

}
