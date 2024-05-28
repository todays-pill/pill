package com.pill.pill.dto;

public record PillDetailDto(
        String name,
        String effect,
        String dosing,
        String caution,
        String imageUrl
) {
}
