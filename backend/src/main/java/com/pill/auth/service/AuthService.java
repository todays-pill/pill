package com.pill.auth.service;

import com.pill.auth.domain.Token;
import com.pill.auth.dto.request.LoginRequestDto;
import com.pill.auth.exception.AuthException.LoginAuthException;
import com.pill.auth.jwt.JwtPayload;
import com.pill.auth.jwt.JwtProvider;
import com.pill.auth.jwt.TokenDto;
import com.pill.auth.repository.TokenRepository;
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

    private final TokenRepository tokenRepository;

    private final JwtProvider jwtProvider;

    public TokenDto login(LoginRequestDto loginDto) {
        Member loginMember = memberRepository.findByEmail(loginDto.email())
                .orElseThrow(LoginAuthException::new);

        validatePassword(loginDto, loginMember);

        TokenDto tokenDto = jwtProvider.issueToken(new JwtPayload(loginMember.getId()));

        saveOrChangeRefreshToken(loginMember, tokenDto);

        return tokenDto;
    }

    private void validatePassword(LoginRequestDto loginDto, Member loginMember) {
        boolean isCorrectPassword = BCrypt.checkpw(loginDto.password(), loginMember.getPassword());
        if(!isCorrectPassword) {
            throw new LoginAuthException();
        }
    }

    private void saveOrChangeRefreshToken(Member loginMember, TokenDto tokenDto) {
        tokenRepository.findByMember(loginMember)
                .ifPresentOrElse(
                        token -> token.changeToken(tokenDto.refreshToken()),
                        () -> tokenRepository.save(new Token(loginMember, tokenDto.refreshToken()))
                );
    }
}
