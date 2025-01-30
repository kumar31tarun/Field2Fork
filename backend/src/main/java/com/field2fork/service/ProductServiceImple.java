package com.field2fork.service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import com.field2fork.custom_exception.ResourceNotFoundException;
import com.field2fork.dao.ProductDao;
import com.field2fork.dao.UserDao;
import com.field2fork.dtos.ApiResponse;
import com.field2fork.dtos.ProductRespDTO;
import com.field2fork.dtos.ProductRequestDTO;
import com.field2fork.pojos.Product;
import com.field2fork.pojos.ProductCategory;
import com.field2fork.pojos.ProductStatus;
import com.field2fork.pojos.User;


@Service
@Transactional
public class ProductServiceImple implements ProductService {

	@Autowired
	private ProductDao productDao;
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private UserDao userDao;
	
	@Override
	public List<ProductRespDTO> getAllProducts() {
		// TODO Auto-generated method stub
		return productDao.findAll()
				.stream().filter(productDao -> productDao.getActiveStatus())
				.map(product -> 
				modelMapper.map(product, 
						ProductRespDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse addNewProduct(ProductRequestDTO dto) {
		// TODO Auto-generated method stub
		//dto -> entity
		Product transientProduct = 
			modelMapper.map(dto, Product.class);
		 if (transientProduct.getStatus() == null) {
		        transientProduct.setStatus(ProductStatus.IN_STOCK);
		    }
		    if (transientProduct.getActiveStatus() == null) {
		        transientProduct.setActiveStatus(true);
		    }
		    User user = userDao.findById(dto.getUserId())
                    .orElseThrow(() -> new RuntimeException("User not found with ID: " + dto.getUserId()));

 
              transientProduct.setUser(user);
		Product persistentProduct = productDao.save(transientProduct);
				return new ApiResponse("Added new product with ID " 
						+ persistentProduct.getId());
	}

	@Override
	public ApiResponse deleteProduct(Long product_id) {
		// TODO Auto-generated method stub
		String mesg = "Invalid Product ID !!!!!";
		Product productData = productDao.findById(product_id).orElseThrow(() -> new ResourceNotFoundException("Invalid Product Id!"));
		productData.setActiveStatus(false);
		productDao.save(productData);
		mesg = "Product Deleted";
		return new ApiResponse(mesg);
	}

	@Override
	public ApiResponse updateProductDetails(ProductRequestDTO dto,Long product_id) {
		// TODO Auto-generated method stub
		String mesg = "Product Updation Failed - invalid product ID";
		// validate
		Product ProductEnt = productDao.findById(product_id)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Product ID!!!"));
		// dto --> entity
		modelMapper.map(dto, ProductEnt);
		productDao.save(ProductEnt);
		mesg = "Product updated !";
		return new ApiResponse(mesg);
	}

	@Override
	public ApiResponse restoreProduct(Long product_id) {
		String mesg = "Invalid Product Id!";
		Product productData = productDao.findById(product_id).orElseThrow(() -> new ResourceNotFoundException("Invalid Product Id!"));
		productData.setActiveStatus(true);
		productDao.save(productData);
		mesg = "Product is available!";
		return new ApiResponse(mesg);
		
	}

	@Override
	public List<ProductCategory> getAllCategories() {
		return Arrays.asList(ProductCategory.values());
		
	}

	@Override
	public List<ProductRespDTO> getProductById(Long product_id) {
		if(productDao.existsById(product_id)) {	
		return productDao.findById(product_id).stream()
				.map(Product -> modelMapper.map(Product, ProductRespDTO.class))
				.collect(Collectors.toList());
		}
		return null;
	}

	@Override
	public List<ProductRespDTO> getProductsByCategory(String category) {
		try {
			ProductCategory category_name = ProductCategory.valueOf(category.toUpperCase());
			
		return productDao.findByCategory(category_name)
				.stream()
				.map(Product -> modelMapper.map(Product, ProductRespDTO.class))
				.collect(Collectors.toList());
		}
		catch(IllegalArgumentException e)
		{
			throw new ResourceNotFoundException("Invalid Category "+ category);
		}
	}


}
