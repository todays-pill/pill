package com.pill.auth.controller;

import com.pill.auth.dto.request.LoginRequestDto;
import com.pill.auth.dto.response.LoginResponseDto;
import com.pill.auth.jwt.Token;
import com.pill.auth.service.AuthService;
import com.pill.member.controller.ResponseApi;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

        Token token = authService.login(loginDto);

        return ResponseApi.createSuccess(
                HttpStatus.CREATED,
                "로그인 성공",
                new LoginResponseDto(
                        token.getAccessToken(),
                        token.getRefreshToken()
                )
        );
    }
}
