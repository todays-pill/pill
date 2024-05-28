package com.pill.pill.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Pill {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String code;

    @Column
    private String effect;

    @Column
    private String imageUrl;

    @Lob
    private String dosing;

    @Column(columnDefinition = "TEXT")
    private String caution;

    @Builder
    public Pill(Long id, String name, String code, String effect, String imageUrl) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.effect = effect;
        this.imageUrl = imageUrl;
    }
}
