package com.pill.auth.service;

import com.pill.auth.dto.request.LoginRequestDto;
import com.pill.auth.exception.AuthException;
import com.pill.auth.exception.AuthException.LoginAuthException;
import com.pill.auth.jwt.JwtPayload;
import com.pill.auth.jwt.JwtProvider;
import com.pill.auth.jwt.Token;
import com.pill.member.domain.Member;
import com.pill.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class AuthService {

    private final MemberRepository memberRepository;

    private final JwtProvider jwtProvider;

    public Token login(LoginRequestDto loginDto) {
        Member loginMember = memberRepository.findByEmail(loginDto.email())
                .orElseThrow(LoginAuthException::new);

        validatePassword(loginDto, loginMember);

        return jwtProvider.issueToken(new JwtPayload(loginMember.getId()));
    }

    private void validatePassword(LoginRequestDto loginDto, Member loginMember) {
        boolean isCorrectPassword = BCrypt.checkpw(loginDto.password(), loginMember.getPassword());
        if(!isCorrectPassword) {
            throw new LoginAuthException();
        }
    }
}
