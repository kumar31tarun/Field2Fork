package com.field2fork.dtos;

import java.math.BigDecimal;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class cartItemRespDTO {
	   private Long id;
	   private Long product_id;
	   private String name;
	   private Integer quantity;
	   private BigDecimal price;
	public cartItemRespDTO(Long id, Long product_id, String name, Integer quantity, BigDecimal price) {
		super();
		this.id = id;
		this.product_id = product_id;
		this.name = name;
		this.quantity = quantity;
		this.price = price;
	}
	   

	   
	    

}
