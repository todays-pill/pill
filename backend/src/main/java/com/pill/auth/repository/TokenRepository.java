package com.pill.auth.repository;

import com.pill.auth.domain.Token;
import com.pill.member.domain.Member;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<Token, Long> {
    Optional<Token> findByMember(Member member);
}
