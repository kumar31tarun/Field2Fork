package com.field2fork.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.field2fork.dtos.cartRespDTO;
import com.field2fork.service.CartService;



@RestController
@RequestMapping("/cart")
public class CartController {
	@Autowired
	private CartService cartService;

	public CartController() {
		System.out.println("in ctor " + getClass());
	}
	
	/*1.
	 * Desc - get all cart details 
	 * URL - http://host:port/cart 
	 * Method - GET
	 */
	@GetMapping
	public ResponseEntity<?> getAllcartDetails() {
		System.out.println("in get all cart details");
		List<cartRespDTO> carts = 
				cartService.getAllcartDetails();
		if (carts.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} else {
			return ResponseEntity.ok(carts);
		}
	}
	
	/*2.
	 * Desc - get all cart item details by cart id
	 * URL - http://host:port/cart/2 
	 * Method - GET
	 */
	 @GetMapping("/{id}")
	 public cartRespDTO getCartDetails(@PathVariable Long id) {
	    return cartService.getCartDetailsById(id);
	 }
	 
	 /* 3. 
	  * Desc - delete cart item by cart ID and cart item ID 
	  * URL - http://host:port/cart/{cartId}/items/{cartItemId} 
	  * Method - DELETE
	  */
	 
	  @DeleteMapping("/{cart_id}/items/{cart_item_id}")
	  public ResponseEntity<?> deleteCartItem(@PathVariable Long cart_id, @PathVariable Long cart_item_id) {
		  System.out.println("Deleting cart item with ID: " + cart_item_id + " from cart ID: " + cart_id);
	      cartService.deleteCartItemByCartId(cart_id, cart_item_id);
	      return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	  }
	

}
