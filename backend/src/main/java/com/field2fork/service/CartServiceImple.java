package com.field2fork.service;

<<<<<<< HEAD
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
=======
import java.util.Arrays;
import java.util.List;
>>>>>>> b1cef2a6d677fafacb2d90d8760efc026b7b3301
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.field2fork.custom_exception.ResourceNotFoundException;
import com.field2fork.dao.CartDao;
<<<<<<< HEAD
import com.field2fork.dao.OrderDao;
import com.field2fork.dao.ProductDao;
import com.field2fork.dao.UserDao;
import com.field2fork.dtos.ApiResponse;
import com.field2fork.dtos.CartRequestDTO;
import com.field2fork.dtos.CartItemRequestDTO;
import com.field2fork.dtos.CartItemResponseDTO;
import com.field2fork.dtos.CartResponseDTO;
import com.field2fork.pojos.Cart;
import com.field2fork.pojos.CartItem;
import com.field2fork.pojos.Order;
import com.field2fork.pojos.OrderItem;
import com.field2fork.pojos.OrderStatus;
import com.field2fork.pojos.Product;
import com.field2fork.pojos.User;
import com.field2fork.razorpay.RazorpayUtil;
=======
import com.field2fork.dao.CartItemDao;
import com.field2fork.dtos.ApiResponse;
import com.field2fork.dtos.cartItemRespDTO;
import com.field2fork.dtos.cartRespDTO;
import com.field2fork.pojos.Cart;
import com.field2fork.pojos.CartItem;
>>>>>>> b1cef2a6d677fafacb2d90d8760efc026b7b3301



@Service
@Transactional
public class CartServiceImple implements CartService {

	@Autowired
	private CartDao cartDao;
	
	@Autowired
<<<<<<< HEAD
	private OrderDao orderDao;
	
	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private UserDao userDao;
=======
	private CartItemDao cartItemDao;
>>>>>>> b1cef2a6d677fafacb2d90d8760efc026b7b3301
	
    @Autowired
    private ModelMapper modelMapper;

	@Override
<<<<<<< HEAD
	public List<CartResponseDTO> getAllcartDetails() {
		 return cartDao.findAll()
	                .stream()
	                .map(cart -> modelMapper.map(cart, CartResponseDTO.class))
	                .collect(Collectors.toList());
	}

	@Override
	public CartResponseDTO getCartDetailsById(Long id) {
=======
	public List<cartRespDTO> getAllcartDetails() {
		 return cartDao.findAll()
	                .stream()
	                .map(cart -> modelMapper.map(cart, cartRespDTO.class))
	                .collect(Collectors.toList());
		
		
	}

	@Override
	public cartRespDTO getCartDetailsById(Long id) {
>>>>>>> b1cef2a6d677fafacb2d90d8760efc026b7b3301
		// TODO Auto-generated method stub
		Cart cart = cartDao.findById(id)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

<<<<<<< HEAD
        List<CartItemResponseDTO> cartItemDTOs = cart.getCartItems().stream()
                .map(cartItem -> new CartItemResponseDTO(
=======
        List<cartItemRespDTO> cartItemDTOs = cart.getCartItems().stream()
                .map(cartItem -> new cartItemRespDTO(
>>>>>>> b1cef2a6d677fafacb2d90d8760efc026b7b3301
                        cartItem.getId(),
                        cartItem.getProduct().getId(),
                        cartItem.getProduct().getName(),
                        cartItem.getQuantity(),
                        cartItem.getPrice()))
                .collect(Collectors.toList());

<<<<<<< HEAD
        return new CartResponseDTO(cart.getId(), cart.getUser().getId(), cartItemDTOs);
	}
	
	@Override
	public ApiResponse deleteCartItemByCartId(Long cart_id, Long cart_item_id) {
	    // Find the cart by cartId
	    Cart cart = cartDao.findById(cart_id)
	            .orElseThrow(() -> new ResourceNotFoundException("Invalid Cart Id!!!!"));

	    // Find the cart item by cartItemId
	    CartItem cartItem = cart.getCartItems().stream()
	            .filter(item -> item.getId() != null && item.getId().longValue() == cart_item_id.longValue())
	            .findFirst()
	            .orElseThrow(() -> new ResourceNotFoundException("Invalid Cart Item Id!!!!"));

	    // Remove item from cart
	    cart.getCartItems().remove(cartItem);
	    cartDao.save(cart);

	    return new ApiResponse("Cart Item Deleted Successfully");
	}

	
	@Override
    public ApiResponse addItemsToCart(CartRequestDTO request) {
	   try {
		 // Fetch user by ID
        User user = userDao.findById(request.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        // Check if the user already has a cart
        Cart cart = cartDao.findByUserId(request.getUserId()).orElse(new Cart(user));

        List<CartItem> cartItems = cart.getCartItems();// Get existing cart items

        for (CartItemRequestDTO itemDTO : request.getCartItems()) {
            Product product = productDao.findById(itemDTO.getProduct_id())
                    .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
            // Check if product already exists in cart
            Optional<CartItem> existingCartItem = cartItems.stream()
                    .filter(ci -> ci.getProduct().getId().equals(product.getId()))
                    .findFirst();

            if (existingCartItem.isPresent()) {
            	 // Update quantity if product exists
                CartItem cartItem = existingCartItem.get();
                cartItem.setQuantity(cartItem.getQuantity() + itemDTO.getQuantity());
                cartItem.setPrice(product.getPricePerUnit().multiply(new BigDecimal(cartItem.getQuantity())));
            } else {
            	// Add new product to cart
                CartItem cartItem = modelMapper.map(itemDTO, CartItem.class);
                cartItem.setCart(cart);
                cartItem.setProduct(product);
                cartItem.setPrice(product.getPricePerUnit().multiply(new BigDecimal(itemDTO.getQuantity())));
                cartItems.add(cartItem);
            }
        }

         // Save the cart (updates cart and cart items)
        cart.setCartItems(cartItems);
        cartDao.save(cart);
        return new ApiResponse("Items added to cart successfully!");

	   }catch (RuntimeException e) {
           return new ApiResponse("Failed to add items: " + e.getMessage());
       } 
    }
	
	 @Override
	    public ApiResponse checkoutCart(Long cartId) {
	        // Get the cart
	        Cart cart = cartDao.findById(cartId)
	                .orElseThrow(() -> new ResourceNotFoundException("Cart not found"));

	        if (cart.getCartItems().isEmpty()) {
	            return new ApiResponse("Cart is empty. Add items before checkout.");
	        }
	        
	        // Create a new order with pending status
	        Order order = new Order();
	        order.setUser(cart.getUser());
	        order.setOrderStatus(OrderStatus.PENDING);
	        order.setOrder_date(new Timestamp(System.currentTimeMillis()));   // Set current timestamp
	        LocalDateTime deliveryDate = LocalDateTime.now().plusDays(3);     // Set delivery date to 3 days from now
	        order.setDeliveryDate(Timestamp.valueOf(deliveryDate));
	        
	        // Create OrderItems from cart items and calculate total amount
	        List<OrderItem> orderItems = new ArrayList<>();
	        BigDecimal totalAmount = BigDecimal.ZERO;
	        for (CartItem cartItem : cart.getCartItems()) {
	            OrderItem orderItem = new OrderItem();
	            orderItem.setOrder(order);
	            orderItem.setProduct(cartItem.getProduct());
	            orderItem.setQuantity(cartItem.getQuantity());
	            orderItem.setPrice(cartItem.getPrice());
	            orderItems.add(orderItem);
	            totalAmount = totalAmount.add(cartItem.getPrice());
	        }
	        order.setOrderItems(orderItems);
	        order.setTotalAmount(totalAmount);
	        
	        // Save the order
	        orderDao.save(order);
	        
	     // Now, create a Razorpay order for this order.
	        String receiptId = "order_rcptid_" + order.getId();
	        try {
	             RazorpayUtil.createRazorpayOrder(order.getTotalAmount(), "INR", receiptId);
	            // Save updated order if needed.
	            orderDao.save(order);
	        } catch (Exception e) {
	            throw new RuntimeException("Failed to create Razorpay order: " + e.getMessage(), e);
	        }
	        
	        return new ApiResponse("Order placed successfully! Order ID: " + order.getId());
	    }
=======
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
>>>>>>> b1cef2a6d677fafacb2d90d8760efc026b7b3301
}
