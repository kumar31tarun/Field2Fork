package com.field2fork.service;

import java.util.List;

import com.field2fork.dtos.ApiResponse;
import com.field2fork.dtos.CartRequestDTO;
import com.field2fork.dtos.CartResponseDTO;

public interface CartService {

	List<CartResponseDTO> getAllcartDetails();

	CartResponseDTO getCartDetailsById(Long id);

	ApiResponse deleteCartItemByCartId(Long cart_id, Long cart_item_id);
	
	ApiResponse addItemsToCart(CartRequestDTO request);
	
	ApiResponse checkoutCart(Long cartId);

}
