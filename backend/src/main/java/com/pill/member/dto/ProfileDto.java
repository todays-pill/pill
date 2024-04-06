package com.pill.member.dto;

import com.pill.member.domain.Gender;
import jakarta.validation.constraints.NotBlank;

public record ProfileDto(
        Long id,
        @NotBlank String name,
        @NotBlank Integer age,
        @NotBlank Gender gender
) {
}
