package com.pill.global.exception;

import com.pill.member.controller.ResponseApi;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ResponseApi<Object>> MethodArgumentTypeMismatchException(MethodArgumentTypeMismatchException exception) {
        log.error(exception.getMessage());
        return ResponseApi.createError(HttpStatus.BAD_REQUEST, exception.getCause().getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ResponseApi<Object>> MethodArgumentNotValidException(MethodArgumentNotValidException exception) {
        log.error(exception.getMessage());
        return ResponseApi.createError(HttpStatus.BAD_REQUEST, exception.getBindingResult().getFieldError().getDefaultMessage());
    }
}
