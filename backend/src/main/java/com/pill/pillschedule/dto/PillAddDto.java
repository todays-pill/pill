package com.pill.pillschedule.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import java.util.List;

public record PillAddDto(

    @NotEmpty
    String pillName,

    @Size(min = 1, max = 7)
    List<String> days,

    @NotEmpty
    boolean isBreakfast,

    @NotEmpty
    boolean isLunch,

    @NotEmpty
    boolean isDinner
) {
}
