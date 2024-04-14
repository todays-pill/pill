package com.pill.global.config;

import com.pill.auth.presentation.interceptor.MemberInterceptor;
import com.pill.global.presentation.AuthMemberArgumentResolver;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
public class WebMvcConfig implements WebMvcConfigurer {

    private final MemberInterceptor memberInterceptor;

    private final AuthMemberArgumentResolver authMemberArgumentResolver;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(memberInterceptor)
                .order(1)
                .excludePathPatterns("/auth/login")
                .excludePathPatterns("/members/register/**")
//                .addPathPatterns("/member/register/profile")
                .addPathPatterns("/**");
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(authMemberArgumentResolver);
    }
}