package com.pill.member;

import com.pill.member.domain.Member;
import com.pill.member.repository.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.*;

@Slf4j
@Transactional
@SpringBootTest
public class memberRegisterTest {

    @Autowired
    MemberRepository memberRepository;

    @Test
    public void memberRegisterTest(){
        // save
        String email = "test@gmail.com";
        String password = "123456";

        Member member1 = Member.EmailPassword(email, password);

        Member saveMember = memberRepository.save(member1);
        Member findMember = memberRepository.findById(saveMember.getId()).get();

        assertThat(saveMember.getEmail()).isEqualTo(findMember.getEmail());
    }
}
