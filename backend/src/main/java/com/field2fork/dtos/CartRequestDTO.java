package com.field2fork.dtos;

import java.util.List;

<<<<<<< HEAD
=======
import com.field2fork.pojos.User;

>>>>>>> b1cef2a6d677fafacb2d90d8760efc026b7b3301
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class CartRequestDTO {
<<<<<<< HEAD
    private Long userId;
    private List<CartItemRequestDTO> cartItems; // ✅ Corrected type

    public CartRequestDTO(Long userId, List<CartItemRequestDTO> cartItems) {  
        this.userId = userId;
        this.cartItems = cartItems;
    }
=======
	private Long id;
	private Long userId;
	private List<cartItemRespDTO> cartItems;
	public CartRequestDTO(Long id, Long userId, List<cartItemRespDTO> cartItems) {
		super();
		this.id = id;
		this.userId = userId;
		this.cartItems = cartItems;
	}
	
	
	

>>>>>>> b1cef2a6d677fafacb2d90d8760efc026b7b3301
}
