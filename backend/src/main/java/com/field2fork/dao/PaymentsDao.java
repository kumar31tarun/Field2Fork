package com.field2fork.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.field2fork.pojos.Payments;

public interface PaymentsDao extends JpaRepository<Payments, Long>{

}
