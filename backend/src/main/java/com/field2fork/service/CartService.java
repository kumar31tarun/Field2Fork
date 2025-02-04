package com.field2fork.service;

import java.util.List;

import com.field2fork.dtos.ApiResponse;
<<<<<<< HEAD
import com.field2fork.dtos.CartRequestDTO;
import com.field2fork.dtos.CartResponseDTO;

public interface CartService {

	List<CartResponseDTO> getAllcartDetails();

	CartResponseDTO getCartDetailsById(Long id);

	ApiResponse deleteCartItemByCartId(Long cart_id, Long cart_item_id);
	
	ApiResponse addItemsToCart(CartRequestDTO request);
	
	ApiResponse checkoutCart(Long cartId);
=======
import com.field2fork.dtos.cartRespDTO;

public interface CartService {

	List<cartRespDTO> getAllcartDetails();

	cartRespDTO getCartDetailsById(Long id);

	ApiResponse deleteCartItemByCartId(Long cart_id, Long cart_item_id);
>>>>>>> b1cef2a6d677fafacb2d90d8760efc026b7b3301

}
