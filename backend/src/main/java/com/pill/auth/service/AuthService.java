package com.pill.auth.service;

import com.pill.auth.dto.request.LoginRequestDto;
import com.pill.auth.exception.AuthException;
import com.pill.auth.jwt.JwtPayload;
import com.pill.auth.jwt.JwtProvider;
import com.pill.auth.jwt.Token;
import com.pill.member.domain.Member;
import com.pill.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class AuthService {

    private final MemberRepository memberRepository;

    private final JwtProvider jwtProvider;

    public Token login(LoginRequestDto loginDto) {
        /**
         * TODO: 비밀번호 디코딩
         */
        Member loginMember = memberRepository.findByEmailAndPassword(loginDto.email(), loginDto.password())
                .orElseThrow(() -> new AuthException("이메일 또는 비밀번호가 틀렸습니다."));

        return jwtProvider.issueToken(new JwtPayload(loginMember.getId()));
    }
}
