package com.pill.member.controller;

import com.pill.member.dto.CreateMemberDto;
import com.pill.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping
    public ResponseEntity<Long> createMember(@RequestBody CreateMemberDto createMemberDto) {
        Long memberId = memberService.createMember(createMemberDto);
        return ResponseEntity.ok(memberId);
    }
}
