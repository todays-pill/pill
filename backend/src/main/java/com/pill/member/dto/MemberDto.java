package com.pill.member.dto;

import com.pill.member.domain.Gender;

public record MemberDto(
        String email,
        String password,
        String name,
        Integer age,
        Gender gender
) {
}
