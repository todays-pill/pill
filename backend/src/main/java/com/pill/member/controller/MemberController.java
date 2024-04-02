package com.pill.member.controller;

import com.pill.member.dto.EmailDto;
import com.pill.member.service.MailService;
import com.pill.member.service.MemberService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ThreadLocalRandom;

@Slf4j
@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
    private final MailService mailService;

    @PostMapping("/register/email")
    public ResponseEntity<ResponseApi<EmailDto>> sendEmail(@RequestBody @Valid EmailDto emailDto, HttpSession session) {

        mailService.sendAuthEmail(session, emailDto.email());
        return ResponseApi.createSuccess(HttpStatus.OK, "이메일 인증 코드", emailDto);
    }

    @PostMapping("/register/email-auth")
    public ResponseEntity<ResponseApi<Object>> checkEmail(@RequestBody HashMap<String, String> authCode, HttpSession session) {
        String code = (String)session.getAttribute("authCode");

        if (authCode.get("authCode").isEmpty() || !authCode.get("authCode").equals(code)) {
            return ResponseApi.createError(HttpStatus.BAD_REQUEST, "인증코드가 일치하지 않습니다.");
        }

        return ResponseApi.createSuccess(HttpStatus.OK, "이메일 인증 성공", null);
    }
}
