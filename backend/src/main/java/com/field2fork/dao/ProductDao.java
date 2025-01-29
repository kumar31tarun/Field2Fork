package com.field2fork.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.field2fork.pojos.Product;

public interface ProductDao extends JpaRepository<Product, Long>{
 
}
