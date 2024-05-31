package com.pill.pillschedule.dto;

public record PillScheduleDetailDto(
        Long pillScheduleId,
        String pillName,
        boolean isBreakfast,
        boolean isLunch,
        boolean isDinner
) {
}
