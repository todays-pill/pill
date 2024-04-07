package com.pill.auth.exception;

import com.pill.global.presentation.CoreException;

public class AuthException extends CoreException {

    public AuthException(String message) {
        super(message);
    }

    public static class LoginAuthException extends AuthException {

        public LoginAuthException() {
            super("이메일 또는 패스워드가 틀렸습니다.");
        }
    }
}
