package com.field2fork.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.field2fork.pojos.Product;
import com.field2fork.pojos.ProductCategory;

public interface ProductDao extends JpaRepository<Product, Long>{
	
	List<Product> findByCategory(ProductCategory category);
	
	long countByActiveStatus(boolean activeStatus);
 
}
