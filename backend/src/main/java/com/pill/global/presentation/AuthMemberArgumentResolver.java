package com.pill.global.presentation;

import com.pill.auth.jwt.JwtPayload;
import com.pill.auth.jwt.JwtProvider;
import com.pill.global.presentation.dto.AuthMember;
import lombok.RequiredArgsConstructor;
import org.springframework.core.MethodParameter;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

@Component
@RequiredArgsConstructor
public class AuthMemberArgumentResolver implements HandlerMethodArgumentResolver {

    private static final int TOKEN_INDEX = 1;

    private final JwtProvider jwtProvider;
    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        boolean hasLoginAnnotation = parameter.hasParameterAnnotation(AuthPrincipal.class);
        boolean hasAuthMemberType = AuthMember.class.isAssignableFrom(parameter.getParameterType());
        return hasLoginAnnotation && hasAuthMemberType;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) {
        final String authorization = webRequest.getHeader(HttpHeaders.AUTHORIZATION);
        final String jwtToken = authorization.split(" ")[TOKEN_INDEX];
        JwtPayload jwtPayload = jwtProvider.getPayload(jwtToken);
        return new AuthMember(jwtPayload.memberId());
    }
}
