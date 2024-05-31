package com.pill.pillschedule.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.List;

public record PillAddDto(

    @NotNull
    String pillName,

    @NotNull
    Long pillId,

    @Size(min = 1, max = 7)
    List<String> days,

    boolean isBreakfast,

    boolean isLunch,

    boolean isDinner
) {
}
