package com.pill.member.service;

import com.pill.member.domain.Member;
import com.pill.member.dto.CreateMemberDto;
import com.pill.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;

    @Transactional
    public Long createMember(CreateMemberDto createMemberDto) {
        Member member = new Member(createMemberDto.email());
        memberRepository.save(member);

        return member.getId();
    }
}
