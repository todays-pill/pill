package com.pill.auth.jwt;

import lombok.Builder;

public class Token {

    private String accessToken;
    private String refreshToken;

    @Builder
    private Token(String accessToken, String refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }

    public static Token of(String accessToken) {
        return Token.builder()
                .accessToken(accessToken)
                .build();
    }

    public static Token of(String accessToken, String refreshToken) {
        return Token.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }
}
