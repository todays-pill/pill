package com.pill.global.exception;

import com.pill.auth.exception.AuthException;
import com.pill.global.response.ResponseApi;
import com.pill.member.exception.MemberException;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.websocket.AuthenticationException;
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

    @ExceptionHandler(CoreException.class)
    public ResponseEntity<ResponseApi<Object>> handleRuntimeException(RuntimeException exception) {
        log.error(exception.getMessage());
        return ResponseApi.createError(HttpStatus.BAD_REQUEST, exception.getMessage());
    }

    @ExceptionHandler(AuthException.class)
    public ResponseEntity<ResponseApi<Object>> handleRuntimeException(AuthException exception) {
        log.error(exception.getMessage());
        return ResponseApi.createError(HttpStatus.UNAUTHORIZED, exception.getMessage());
    }
}
