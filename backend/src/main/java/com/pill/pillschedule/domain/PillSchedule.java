package com.pill.pillschedule.domain;

import com.pill.member.domain.Member;
import com.pill.pill.domain.Pill;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PillSchedule {

    @Id @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id", referencedColumnName = "id")
    private Member member;

    @ManyToOne
    private Pill pill;

    @Column
    private String pillName;

    @Column
    private boolean isBreakfast;

    @Column
    private boolean isLunch;

    @Column
    private boolean isDinner;

    @Builder

    public PillSchedule(Long id, Member member, Pill pill, String pillName, boolean isBreakfast, boolean isLunch,
                        boolean isDinner) {
        this.id = id;
        this.member = member;
        this.pill = pill;
        this.pillName = pillName;
        this.isBreakfast = isBreakfast;
        this.isLunch = isLunch;
        this.isDinner = isDinner;
    }
}
