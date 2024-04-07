package com.pill.auth.service;

import com.pill.auth.domain.Token;
import com.pill.auth.jwt.TokenDto;
import com.pill.auth.repository.TokenRepository;
import com.pill.member.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TokenService {

    private final TokenRepository tokenRepository;

    @Transactional
    public void saveOrChangeRefreshToken(Member loginMember, TokenDto tokenDto) {
        tokenRepository.findByMember(loginMember)
                .ifPresentOrElse(
                        token -> token.changeToken(tokenDto.refreshToken()),
                        () -> tokenRepository.save(new Token(loginMember, tokenDto.refreshToken()))
                );
    }
}
