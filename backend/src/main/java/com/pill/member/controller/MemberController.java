package com.pill.member.controller;

import com.pill.member.dto.CreateMemberDto;
import com.pill.member.service.MailService;
import com.pill.member.service.MemberService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
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
    public ResponseEntity<Map<String, String>> sendEmail(@RequestBody @Valid CreateMemberDto createMemberDto, BindingResult bindingResult, HttpSession seession) {
        Map<String, String> result = new HashMap<>();

        if (bindingResult.hasErrors()) {
            result.put("error", bindingResult.getFieldError().getDefaultMessage());
            return ResponseEntity.badRequest().body(result);
        }

        String authCode = generateCode();
        seession.setAttribute("authCode", authCode);
        mailService.sendEmail(createMemberDto.email(), "pill 이메일 인증", "인증코드: " + authCode);
        result.put("message", "이메일 전송 성공");
        result.put("email", createMemberDto.email());
        return ResponseEntity.ok(result);
    }

    @PostMapping("/register/email-auth")
    public ResponseEntity<Map<String, String>> checkEmail(@RequestBody HashMap<String, String> authCode, HttpSession session) {
        Map<String, String> result = new HashMap<>();
        String code = (String)session.getAttribute("authCode");

        if (authCode.get("authCode").isEmpty() || !authCode.get("authCode").equals(code)) {
            result.put("error", "인증코드가 일치하지 않습니다.");
            return ResponseEntity.badRequest().body(result);
        }

        result.put("message", "이메일 인증 성공");
        return ResponseEntity.ok(result);
    }

    public String generateCode() {
        return String.valueOf(ThreadLocalRandom.current().nextInt(100000, 1000000));
    }
}
