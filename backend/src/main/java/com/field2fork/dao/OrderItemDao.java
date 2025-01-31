package com.field2fork.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.field2fork.pojos.OrderItem;

public interface OrderItemDao extends JpaRepository<OrderItem, Long>{
	List<OrderItem> findByOrderId(Long orderId);

}
