package com.pill.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

public record LoginDto(
        @NotEmpty @Email
        String email,
        @NotEmpty
        String password
) {
}
