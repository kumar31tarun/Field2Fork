package com.field2fork.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.field2fork.pojos.OrderItem;

public interface OrderItemDao extends JpaRepository<OrderItem, Long>{

}
