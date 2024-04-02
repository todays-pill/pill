package com.pill.member.controller;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@ControllerAdvice
@ComponentScan
public class EmailControllerAdvice {

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ResponseApi<Object>> MethodArgumentTypeMismatchException(MethodArgumentTypeMismatchException exception) {
        return ResponseApi.createError(HttpStatus.BAD_REQUEST, exception.getCause().getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ResponseApi<Object>> MethodArgumentNotValidException(MethodArgumentNotValidException exception) {
        return ResponseApi.createError(HttpStatus.BAD_REQUEST, exception.getBindingResult().getFieldError().getDefaultMessage());
    }
}
