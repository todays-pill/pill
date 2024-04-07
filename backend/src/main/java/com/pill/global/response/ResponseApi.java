package com.pill.global.response;

import lombok.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
@RequiredArgsConstructor
public class ResponseApi<T> {
    private HttpStatus status;
    private String message;
    private T data;

    private ResponseApi(HttpStatus status, String message, T data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    public static <T> ResponseEntity<ResponseApi<T>> createSuccess(HttpStatus status, String message, T data) {
        ResponseApi<T> responseApi = new ResponseApi<>(status, message, data);
        return ResponseEntity.ok(responseApi);
    }

    public static <T> ResponseEntity<ResponseApi<T>> createSuccess(HttpStatus status, T data) {
        ResponseApi<T> responseApi = new ResponseApi<>(status, null, data);
        return ResponseEntity.ok(responseApi);
    }

    public static <T> ResponseEntity<ResponseApi<T>> createError(HttpStatus status, String message) {
        ResponseApi<T> responseApi = new ResponseApi<>(status, message, null);
        return ResponseEntity.badRequest().body(responseApi);
    }
}
