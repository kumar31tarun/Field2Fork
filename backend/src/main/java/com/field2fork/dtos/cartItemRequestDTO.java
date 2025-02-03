package com.field2fork.dtos;

import java.math.BigDecimal;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class cartItemRequestDTO {
	   private Long id;
	    private Long product_id;
	    private Integer quantity;
	    private BigDecimal price;
		public cartItemRequestDTO(Long id, Long product_id, Integer quantity, BigDecimal price) {
			super();
			this.id = id;
			this.product_id = product_id;
			this.quantity = quantity;
			this.price = price;
		}
	    

}
