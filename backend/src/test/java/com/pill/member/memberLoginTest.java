package com.pill.member;

import com.pill.auth.dto.request.LoginRequestDto;
import com.pill.auth.jwt.JwtPayload;
import com.pill.auth.jwt.JwtProvider;
import com.pill.auth.jwt.TokenDto;
import com.pill.auth.service.AuthService;
import com.pill.auth.service.TokenService;
import com.pill.member.domain.Member;
import com.pill.member.dto.MemberDto;
import com.pill.member.repository.MemberRepository;
import com.pill.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@Slf4j
@SpringBootTest
public class memberLoginTest {

    @Autowired
    MemberRepository memberRepository;

    @Test
    void memberLogin() {
        String email = "test@gamil.com";
        String password = "123456";

        Member member1 = Member.EmailPassword(email, password);

        String encode = BCrypt.hashpw(member1.getPassword(), BCrypt.gensalt());
        Member saveMember = memberRepository.save(Member.EmailPassword(member1.getEmail(), encode));

        Member findMember = memberRepository.findById(saveMember.getId()).get();

        boolean isCorrectPassword = BCrypt.checkpw(member1.getPassword(), findMember.getPassword());
        Assertions.assertThat(isCorrectPassword).isTrue();
    }
}
