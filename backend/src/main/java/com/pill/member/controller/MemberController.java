package com.pill.member.controller;

import com.pill.member.domain.Member;
import com.pill.member.dto.EmailDto;
import com.pill.member.dto.MemberDto;
import com.pill.member.dto.PasswordDto;
import com.pill.member.dto.ProfileDto;
import com.pill.member.service.MailService;
import com.pill.member.service.MemberService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/register/email")
    public ResponseEntity<ResponseApi<EmailDto>> sendEmail(@RequestBody @Valid EmailDto emailDto, HttpSession session) {
        session.setAttribute("email", emailDto.email());
        mailService.sendAuthEmail(session, emailDto.email());

        return ResponseApi.createSuccess(HttpStatus.OK, "이메일 인증 코드", emailDto);
    }

    @GetMapping("/register/email-auth")
    public ResponseEntity<ResponseApi<Object>> checkEmail(@RequestBody HashMap<String, String> authCode, HttpSession session) {
        String code = (String)session.getAttribute("authCode");

        if (authCode.get("authCode").isEmpty() || !authCode.get("authCode").equals(code)) {
            return ResponseApi.createError(HttpStatus.BAD_REQUEST, "인증코드가 일치하지 않습니다.");
        }

        return ResponseApi.createSuccess(HttpStatus.OK, "이메일 인증 성공", null);
    }

    @PostMapping("/register/password")
    public ResponseEntity<ResponseApi<Object>> savePassword(@RequestBody @Valid PasswordDto passwordDto, HttpSession session) {

        // 단방향 암호화인 hash 함수로 hash 값을 세션에 저장
        String encodedPassword = passwordEncoder.encode(passwordDto.password());
        session.setAttribute("password", encodedPassword);

        return ResponseApi.createSuccess(HttpStatus.OK, "비밀번호 확인", null);
    }

    @PostMapping("/register/profile")
    public ResponseEntity<ResponseApi<Long>> createMember(@RequestBody ProfileDto profileDto, HttpSession session) {
        MemberDto dto = new MemberDto(session.getAttribute("email").toString(), session.getAttribute("password").toString(),
                profileDto.name(), profileDto.age(), profileDto.gender());
        Long memberId = memberService.createMember(dto);

        return ResponseApi.createSuccess(HttpStatus.OK, "회원가입 성공", memberId);
    }
}
