package com.pill.auth.jwt;

import com.pill.auth.exception.AuthException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Jwts.SIG;
import io.jsonwebtoken.SignatureAlgorithm;
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

    public boolean isExpired(String token) {
        try {
            Claims claims = getJwtParser().parseSignedClaims(token).getPayload();
            return claims.getExpiration().before(new Date());
        } catch (Exception e) {
            return true;
        }
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
        }catch (RuntimeException exception) {
            throw new AuthException("jwt parse exception", exception);
        }
    }

    private JwtParser getJwtParser() {
        return Jwts.parser().verifyWith(jwtProperties.getSecretKey()).build();
    }
}
