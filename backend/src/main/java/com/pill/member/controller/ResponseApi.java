package com.pill.member.controller;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

import java.util.Map;

@Setter
@Getter
@RequiredArgsConstructor
public class ResponseApi<T> {
    private HttpStatus status;
    private String message;
    private T data;

    public static <T> ResponseEntity<ResponseApi<T>> createSuccess(HttpStatus status, String message, T data) {
        ResponseApi<T> responseApi = new ResponseApi<>();
        responseApi.setStatus(status);
        responseApi.setMessage(message);
        responseApi.setData(data);
        return ResponseEntity.ok(responseApi);
    }

    public static <T> ResponseEntity<ResponseApi<T>> createError(HttpStatus status, String message) {
        ResponseApi<T> responseApi = new ResponseApi<>();
        responseApi.setStatus(status);
        responseApi.setMessage(message);
        responseApi.setData(null);
        return ResponseEntity.badRequest().body(responseApi);
    }
}
