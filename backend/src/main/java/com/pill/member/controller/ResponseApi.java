package com.pill.member.controller;

import lombok.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

import java.util.HashMap;
import java.util.Map;

@Getter
@RequiredArgsConstructor
@AllArgsConstructor
public class ResponseApi<T> {
    private HttpStatus status;
    private String message;
    private T data;

    public static <T> ResponseEntity<ResponseApi<T>> createSuccess(HttpStatus status, String message, T data) {
        ResponseApi<T> responseApi = new ResponseApi<>(status, message, data);
        return ResponseEntity.ok(responseApi);
    }

    public static <T> ResponseEntity<ResponseApi<T>> createError(HttpStatus status, String message) {
        ResponseApi<T> responseApi = new ResponseApi<>(status, message, null);
        return ResponseEntity.badRequest().body(responseApi);
    }
}
