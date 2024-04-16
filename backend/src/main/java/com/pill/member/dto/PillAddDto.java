package com.pill.member.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.sql.Date;

public record PillAddDto(
    @NotEmpty
    @NotNull
    Long memberId,

    @NotEmpty
    String pillName,

    @NotEmpty
    String frequency,

    @NotEmpty
    boolean isBreakfast,

    @NotEmpty
    boolean isLunch,

    @NotEmpty
    boolean isDinner,

    @NotEmpty
    Date startDate
) {
}
