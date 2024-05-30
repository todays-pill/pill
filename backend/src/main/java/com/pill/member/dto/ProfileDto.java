package com.pill.member.dto;

import com.pill.member.domain.Gender;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ProfileDto(
        @NotBlank String name,
        @NotNull Gender gender
) {
}
