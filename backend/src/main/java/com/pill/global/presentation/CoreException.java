package com.pill.global.presentation;

public class CoreException extends RuntimeException {
    public CoreException(String message) {
        super(message);
    }

    public CoreException(String message, Throwable cause) {
        super(message, cause);
    }
}
