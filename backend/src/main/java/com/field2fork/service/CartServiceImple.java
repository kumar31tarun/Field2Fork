package com.field2fork.service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.field2fork.custom_exception.ResourceNotFoundException;
import com.field2fork.dao.CartDao;
import com.field2fork.dao.CartItemDao;
import com.field2fork.dtos.ApiResponse;
import com.field2fork.dtos.cartItemRespDTO;
import com.field2fork.dtos.cartRespDTO;
import com.field2fork.pojos.Cart;
import com.field2fork.pojos.CartItem;



@Service
@Transactional
public class CartServiceImple implements CartService {

	@Autowired
	private CartDao cartDao;
	
	@Autowired
	private CartItemDao cartItemDao;
	
    @Autowired
    private ModelMapper modelMapper;

	@Override
	public List<cartRespDTO> getAllcartDetails() {
		 return cartDao.findAll()
	                .stream()
	                .map(cart -> modelMapper.map(cart, cartRespDTO.class))
	                .collect(Collectors.toList());
		
		
	}

	@Override
	public cartRespDTO getCartDetailsById(Long id) {
		// TODO Auto-generated method stub
		Cart cart = cartDao.findById(id)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        List<cartItemRespDTO> cartItemDTOs = cart.getCartItems().stream()
                .map(cartItem -> new cartItemRespDTO(
                        cartItem.getId(),
                        cartItem.getProduct().getId(),
                        cartItem.getProduct().getName(),
                        cartItem.getQuantity(),
                        cartItem.getPrice()))
                .collect(Collectors.toList());

        return new cartRespDTO(cart.getId(), cart.getUser().getId(), cartItemDTOs);
	}

	@Override
	public ApiResponse deleteCartItemByCartId(Long cart_id, Long cart_item_id) {
		 String message = "Invalid Cart Item ID !!!!!";
		    // Find the cart by cartId
		 Cart cart = cartDao.findById(cart_id)
		            .orElseThrow(() -> new ResourceNotFoundException("Invalid Cart Id!!!!"));
		    // Find the cart item by cartItemId
		 CartItem cartItem = cart.getCartItems().stream()
		            .filter(item -> item.getId().equals(cart_item_id))
		            .findFirst()
		            .orElseThrow(() -> new ResourceNotFoundException("Invalid Cart Item Id!!!!"));
		 //cartItem.setActiveStatus(false); 
		 cart.getCartItems().remove(cartItem);
		 cartDao.save(cart);
         return new ApiResponse("Cart Item Deleted Successfully");
		
	}
}
