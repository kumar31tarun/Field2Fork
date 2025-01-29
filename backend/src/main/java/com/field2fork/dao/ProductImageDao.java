package com.field2fork.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.field2fork.pojos.ProductImage;

public interface ProductImageDao extends JpaRepository<ProductImage, Long> {

}
