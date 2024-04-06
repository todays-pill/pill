package com.pill.member.domain;

import com.pill.member.dto.MemberDto;
import com.pill.member.dto.ProfileDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
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

    @ColumnDefault("'unkwoun'")
    private String name;

    @ColumnDefault("0")
    private Integer age;

    @Enumerated(EnumType.STRING)
    @ColumnDefault("'MALE'")
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
    }

    public void updateMember(String name, Integer age, Gender gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
