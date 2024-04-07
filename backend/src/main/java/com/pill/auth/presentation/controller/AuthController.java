package com.pill.auth.presentation.controller;

import com.pill.auth.dto.request.LoginRequestDto;
import com.pill.auth.dto.response.LoginResponseDto;
import com.pill.auth.jwt.TokenDto;
import com.pill.auth.service.AuthService;
import com.pill.global.presentation.AuthPrincipal;
import com.pill.global.presentation.dto.AuthMember;
import com.pill.global.response.ResponseApi;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<ResponseApi<LoginResponseDto>> login(@RequestBody @Valid LoginRequestDto loginDto) {

        TokenDto token = authService.login(loginDto);

        return ResponseApi.createSuccess(
                HttpStatus.CREATED,
                "로그인 성공",
                new LoginResponseDto(
                        token.accessToken(),
                        token.refreshToken()
                )
        );
    }

    @GetMapping("/test")
    public ResponseEntity<ResponseApi<AuthMember>> test(@AuthPrincipal AuthMember authMember) {

        return ResponseApi.createSuccess(
                HttpStatus.CREATED,
                "로그인 성공",
                authMember
        );
    }
}
