package com.pill.auth.jwt;

import com.pill.auth.exception.AuthException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

@Component
public class JwtTokenExtractor {

    private static final String PREFIX_BEARER = "Bearer ";
    private static final String ACCESS_TOKEN_HEADER = HttpHeaders.AUTHORIZATION;
    private static final String REFRESH_TOKEN_HEADER = "Authorization-Refresh";

    public String extractAccessToken(final HttpServletRequest request) {
        final String accessToken = request.getHeader(ACCESS_TOKEN_HEADER);
        if (isValid(accessToken)) {
            return accessToken.substring(PREFIX_BEARER.length());
        }
        final String logMessage = "인증 실패(액세스 토큰 추출 실패) - 토큰 : " + accessToken;
        throw new AuthException(logMessage);
    }

    public String extractRefreshToken(final HttpServletRequest request) {
        final String refreshToken = request.getHeader(REFRESH_TOKEN_HEADER);
        if (isValid(refreshToken)) {
            return refreshToken.substring(PREFIX_BEARER.length());
        }
        final String logMessage = "인증 실패(리프레시 토큰 추출 실패) - 토큰 : " + refreshToken;
        throw new AuthException(logMessage);
    }

    private static boolean isValid(String refreshToken) {
        return StringUtils.hasText(refreshToken) && refreshToken.startsWith(PREFIX_BEARER);
    }
}
