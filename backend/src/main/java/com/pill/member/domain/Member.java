package com.pill.member.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

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

    @Column
    private String name;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Builder
    private Member(Long id, String email, String password, String name, Gender gender) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.gender = gender;
    }

    public static Member Id(Long id) {
        return Member.builder().id(id).build();
    }

    public static Member EmailPassword(String email, String password) {
        return Member.builder().email(email).password(password).build();
    }

    public void updateMember(String name, Gender gender) {
        this.name = name;
        this.gender = gender;
    }
}
