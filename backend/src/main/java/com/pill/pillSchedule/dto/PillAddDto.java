package com.pill.pillSchedule.dto;

import jakarta.validation.constraints.NotEmpty;

public record PillAddDto(

    @NotEmpty
    String pillName,

    @NotEmpty
    String frequency,

    @NotEmpty
    boolean isBreakfast,

    @NotEmpty
    boolean isLunch,

    @NotEmpty
    boolean isDinner
) {
}
