package com.francisco.crud_fullstack_angular.exception;


public class ResourceNotFoundException extends RuntimeException {

    private String message;
    public ResourceNotFoundException(String message) {
        super(message);
        this.message = message;
    }   

}
