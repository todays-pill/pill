package com.pill.member.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record PasswordDto(
        @NotBlank
        String password
) {
}
