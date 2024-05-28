package com.pill.member.controller;

import com.pill.global.response.ResponseApi;
import com.pill.member.dto.EmailDto;
import com.pill.member.dto.IdDto;
import com.pill.member.dto.MemberDto;
import com.pill.member.dto.ProfileDto;
import com.pill.member.service.MailService;
import com.pill.member.service.MemberService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

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

    @GetMapping("/register/email-auth")
    public ResponseEntity<ResponseApi<Object>> checkEmail(@RequestBody HashMap<String, String> authCode, HttpSession session) {
        String code = (String)session.getAttribute("authCode");

        if (authCode.get("authCode").isEmpty() || !authCode.get("authCode").equals(code)) {
            return ResponseApi.createError(HttpStatus.BAD_REQUEST, "인증코드가 일치하지 않습니다.");
        }

        return ResponseApi.createSuccess(HttpStatus.OK, "이메일 인증 성공", null);
    }

    @PostMapping("/register/password")
    public ResponseEntity<ResponseApi<IdDto>> savePassword(@RequestBody @Valid MemberDto memberDto) {

        // 비밀번호 암호화 후 생성
        String encode = BCrypt.hashpw(memberDto.password(), BCrypt.gensalt());
        Long memberId = memberService.createMember(new MemberDto(memberDto.email(), encode));

        return ResponseApi.createSuccess(HttpStatus.OK, "멤버 생성 완료", new IdDto(memberId));
    }

    @PostMapping("/register/profile")
    public ResponseEntity<ResponseApi<IdDto>> createMember(@RequestBody ProfileDto profileDto) {
        memberService.updateMember(profileDto.id(), profileDto);
        return ResponseApi.createSuccess(HttpStatus.OK, "회원가입 성공", new IdDto(profileDto.id()));
    }
}
