package com.pill.auth.jwt;

import lombok.Builder;
import lombok.Getter;

public record TokenDto(
        String accessToken,
        String refreshToken
) {
}
