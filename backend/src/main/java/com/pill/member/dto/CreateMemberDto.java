package com.pill.member.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record CreateMemberDto(
        @Email @NotBlank
        String email,
        @NotBlank
        String password
) {

}
