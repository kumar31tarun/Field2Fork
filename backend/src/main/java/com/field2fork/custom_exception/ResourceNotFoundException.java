package com.field2fork.custom_exception;

public class ResourceNotFoundException extends RuntimeException{
	public ResourceNotFoundException(String errMesg) {
		super(errMesg);
	}

}
