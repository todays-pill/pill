package com.pill.pillSchedule.domain;

import com.pill.member.domain.Member;
import jakarta.persistence.*;
import lombok.AccessLevel;
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
    private Member memberId;

//    @ManyToOne
//    @JoinColumn(name = "pill_id", referencedColumnName = "id")
//    private Pill pillId;

    @Column
    private String pillName;
    private String frequency;
    private boolean isBreakfast;
    private boolean isLunch;
    private boolean isDinner;

    private LocalDate startDate;

    public PillSchedule(Member member, String pillName, String frequency, boolean isBreakfast, boolean isLunch, boolean isDinner, LocalDate startDate) {
        this.memberId = member;
//        this.pillId = pill;
        this.pillName = pillName;
        this.frequency = frequency;
        this.isBreakfast = isBreakfast;
        this.isLunch = isLunch;
        this.isDinner = isDinner;
        this.startDate = startDate;
    }
}
