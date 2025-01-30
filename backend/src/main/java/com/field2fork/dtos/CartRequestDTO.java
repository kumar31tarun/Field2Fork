package com.field2fork.dtos;

import java.util.List;

import com.field2fork.pojos.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class CartRequestDTO {
	private Long id;
	private Long userId;
	private List<cartItemRespDTO> cartItems;
	public CartRequestDTO(Long id, Long userId, List<cartItemRespDTO> cartItems) {
		super();
		this.id = id;
		this.userId = userId;
		this.cartItems = cartItems;
	}
	
	
	

}
