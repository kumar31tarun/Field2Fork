package com.field2fork.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.field2fork.pojos.Order;

public interface OrderDao extends JpaRepository<Order, Long>{

}
