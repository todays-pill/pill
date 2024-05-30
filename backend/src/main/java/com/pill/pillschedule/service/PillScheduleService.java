package com.pill.pillschedule.service;

import com.pill.global.presentation.dto.AuthMember;
import com.pill.member.domain.Member;
import com.pill.pillschedule.domain.PillSchedule;
import com.pill.pillschedule.domain.ScheduleDay;
import com.pill.pillschedule.dto.PillAddDto;
import com.pill.pillschedule.repository.PillScheduleRepository;
import com.pill.pillschedule.repository.ScheduleDayRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PillScheduleService {

    private final PillScheduleRepository pillScheduleRepository;
    private final ScheduleDayRepository scheduleDayRepository;

    @Transactional
    public Long pillSave(AuthMember authMember, PillAddDto pillAddDto) {

        PillSchedule pillSchedule = PillSchedule.builder()
                .member(Member.Id(authMember.memberId()))
                .pillName(pillAddDto.pillName())
                .isBreakfast(pillAddDto.isBreakfast())
                .isLunch(pillAddDto.isLunch())
                .isDinner(pillAddDto.isDinner())
                .build();
        PillSchedule savedPillSchedule = pillScheduleRepository.save(pillSchedule);

        createPillScheduleDays(pillAddDto, savedPillSchedule);

        return savedPillSchedule.getId();
    }

    private void createPillScheduleDays(PillAddDto pillAddDto, PillSchedule savedPillSchedule) {
        List<ScheduleDay> scheduleDays = pillAddDto.days().stream()
                .map(day -> ScheduleDay.builder().pillSchedule(savedPillSchedule).day(day).build()).toList();

        scheduleDayRepository.saveAll(scheduleDays);
    }
}
