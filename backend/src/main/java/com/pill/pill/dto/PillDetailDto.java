package com.pill.pill.dto;

public record PillDetailDto(
        Long pillId,
        String name,
        String effect,
        String dosing,
        String caution,
        String imageUrl
) {
}
