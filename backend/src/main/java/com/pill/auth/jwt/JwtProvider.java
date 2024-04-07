package com.pill.auth.jwt;

import com.pill.auth.exception.AuthException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Jwts.SIG;
import java.util.Date;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JwtProvider {
    private static final String MEMBER_ID = "memberId";

    private final JwtProperties jwtProperties;

    public TokenDto issueToken(JwtPayload jwtPayload) {
        return new TokenDto(
                generateToken(jwtPayload.memberId(),true),
                generateToken(jwtPayload.memberId(),false)
        );
    }

    private String generateToken(Long memberId, boolean isAccessToken) {
        final Date now = new Date();
        final Date expiration = new Date(now.getTime() + (isAccessToken ? jwtProperties.getAccessTokenExpireTime() : jwtProperties.getRefreshTokenExpireTime()));
        return Jwts.builder()
                .claim(MEMBER_ID,memberId)
                .issuedAt(now)
                .expiration(expiration)
                .signWith(jwtProperties.getSecretKey(), SIG.HS256)
                .compact();
    }


    public JwtPayload getPayload(String token) {
        Claims claims = getClaims(token);
        Long memberId = claims.get(MEMBER_ID, Long.class);
        return new JwtPayload(memberId);
    }

    private Claims getClaims(String token) {
        try {
            Claims claims = getJwtParser().parseSignedClaims(token).getPayload();
            return claims;
        }catch (JwtException e) {
            final String logMessage = "인증 실패(잘못된 토큰) - 토큰 : " + token + " [cause: " + e.getMessage() + "]";
            throw new AuthException(logMessage, e);
        }
    }

    private boolean isExpired(Claims claims) {
        try {
            return claims.getExpiration().before(new Date());
        } catch (Exception e) {
            return true;
        }
    }

    private JwtParser getJwtParser() {
        return Jwts.parser().verifyWith(jwtProperties.getSecretKey()).build();
    }
}
