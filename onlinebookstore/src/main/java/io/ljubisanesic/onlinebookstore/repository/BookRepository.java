package io.ljubisanesic.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.ljubisanesic.onlinebookstore.entity.Book;

public interface BookRepository  extends JpaRepository<Book, Long>{

}
