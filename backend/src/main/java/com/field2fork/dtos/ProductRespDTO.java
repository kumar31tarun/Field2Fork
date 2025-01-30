package com.field2fork.dtos;

import java.math.BigDecimal;

import com.field2fork.pojos.ProductCategory;
import com.field2fork.pojos.ProductStatus;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class ProductRespDTO {
	private Long id;
    private String name;	
    private String description;   
    private BigDecimal pricePerUnit;
    private Integer stockQuantity;
    private ProductStatus status;
    private ProductCategory category; 
    
    
	public ProductRespDTO(Long id,String name, String description, BigDecimal pricePerUnit, Integer stockQuantity,
			ProductStatus status, ProductCategory category) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.pricePerUnit = pricePerUnit;
		this.stockQuantity = stockQuantity;
		this.status = status;
		this.category = category;
	}
    
    
    


}