package com.pill.member.domain;

import com.pill.member.dto.MemberDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer age;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    public Member(String email, String password, String name, Integer age, Gender gender) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public Member(MemberDto dto) {
        this.email = dto.email();
        this.password = dto.password();
        this.name = dto.name();
        this.age = dto.age();
        this.gender = dto.gender();
    }

    public Member(String email) {
        this.email = email;
    }
}
