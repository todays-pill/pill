package com.pill.member.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record EmailDto(
        @Email(message = "유효하지 않은 이메일 주소입니다.")
        @NotBlank(message = "이메일은 공백일 수 없습니다.")
        String email
) {

}
