package com.pill.auth.dto.response;

public record LoginResponseDto(
        String accessToken,
        String refreshToken
) {
}
