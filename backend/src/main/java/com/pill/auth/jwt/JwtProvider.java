package com.pill.auth.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JwtProvider {
    private static final String MEMBER_ID = "memberId";

    private final JwtProperties jwtProperties;

    public Token issueToken(JwtPayload jwtPayload) {
        return Token.of(
                generateToken(jwtPayload.memberId(),true),
                generateToken(jwtPayload.memberId(),false)
        );
    }

    private String generateToken(Long memberId, boolean isAccessToken) {
        final Date now = new Date();
        final Date expiration = new Date(now.getTime() + (isAccessToken ? jwtProperties.getAccessTokenExpireTime() : jwtProperties.getRefreshTokenExpireTime()));
        return Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .claim(MEMBER_ID,memberId)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(SignatureAlgorithm.HS256, jwtProperties.getSecretKey())
                .compact();
    }

    public boolean isExpired(String token) {
        try {
            Claims claims = getJwtParser().parseClaimsJws(token).getBody();
            return claims.getExpiration().before(new Date());
        } catch (Exception e) {
            return true;
        }
    }

    public JwtPayload getSubject(String token) {
        Claims claims = getJwtParser().parseClaimsJws(token).getBody();
        Long memberId = claims.get(MEMBER_ID, Long.class);
        return new JwtPayload(memberId);
    }

    private JwtParser getJwtParser() {
        return Jwts.parser().setSigningKey(jwtProperties.getSecretKey());
    }
}
