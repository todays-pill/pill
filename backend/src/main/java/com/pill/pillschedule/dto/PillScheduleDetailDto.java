package com.pill.pillschedule.dto;

public record PillScheduleDetailDto(
        Long pillScheduleId,
        String pillName,
        String imageUrl,
        boolean isBreakfast,
        boolean isLunch,
        boolean isDinner
) {
}
