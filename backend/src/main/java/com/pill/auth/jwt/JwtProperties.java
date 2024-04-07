package com.pill.auth.jwt;

import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import java.util.Base64;
import javax.crypto.SecretKey;
import lombok.Getter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@ConfigurationProperties(value = "jwt")
public class JwtProperties {

    @NotBlank
    private final SecretKey secretKey;

    @NotEmpty
    private final Long accessTokenExpireTime;

    @NotEmpty
    private final Long refreshTokenExpireTime;

    public JwtProperties(String secretKey, Long accessTokenExpireTime, Long refreshTokenExpireTime) {
        this.secretKey = Keys.hmacShaKeyFor(Decoders.BASE64URL.decode(secretKey));
        this.accessTokenExpireTime = accessTokenExpireTime;
        this.refreshTokenExpireTime = refreshTokenExpireTime;
    }
}
