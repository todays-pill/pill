package com.pill.member.service;

import com.pill.member.domain.Member;
import com.pill.member.dto.EmailDto;
import com.pill.member.dto.MemberDto;
import com.pill.member.dto.MemberMeDto;
import com.pill.member.dto.ProfileDto;
import com.pill.member.exception.MemberException;
import com.pill.member.exception.MemberException.NotFoundMemberException;
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
    public Long createMember(MemberDto memberDto) {
        Member member = memberRepository.save(Member.EmailPassword(memberDto.email(), memberDto.password()));
        return member.getId();
    }

    @Transactional
    public void updateMember(Long memberId, ProfileDto profileDto) {
        Member member = memberRepository.findById(memberId).orElseThrow(NotFoundMemberException::new);
        member.updateMember(profileDto.name(), profileDto.gender());
    }

    public MemberMeDto findMember(Long memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(NotFoundMemberException::new);
        return new MemberMeDto(member.getId(), member.getName());
    }
}
