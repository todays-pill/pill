package com.pill.auth.presentation.interceptor;

import com.pill.auth.exception.AuthException;
import com.pill.auth.jwt.JwtPayload;
import com.pill.auth.jwt.JwtProvider;
import com.pill.auth.jwt.JwtTokenExtractor;
import com.pill.member.repository.MemberRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
@RequiredArgsConstructor
@Slf4j
public class MemberInterceptor implements HandlerInterceptor {

    private final JwtTokenExtractor jwtTokenExtractor;
    private final JwtProvider jwtProvider;
    private final MemberRepository memberRepository;

    @Override
    public boolean preHandle(final HttpServletRequest request, final HttpServletResponse response, final Object handler) throws Exception {
        final String accessToken = jwtTokenExtractor.extractAccessToken(request);
        JwtPayload jwtPayload = jwtProvider.getPayload(accessToken);
        validateMemberExist(jwtPayload.memberId());
        return true;
    }

    private void validateMemberExist(final Long memberId) {
        if (notExistsById(memberId)) {
            String logMessage = "인증 실패(존재하지 않는 멤버) - 회원 id : " + memberId;
            throw new AuthException(logMessage);
        }
    }

    private boolean notExistsById(final Long memberId) {
        return !memberRepository.existsById(memberId);
    }
}
