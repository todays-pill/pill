package com.pill.member.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;

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
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    private Date startDate;

    public PillSchedule(Member member, String pillName, String frequency, boolean isBreakfast, boolean isLunch, boolean isDinner, Date startDate) {
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
