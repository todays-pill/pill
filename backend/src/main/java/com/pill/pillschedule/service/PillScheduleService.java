package com.pill.pillschedule.service;

import com.pill.global.presentation.CoreException;
import com.pill.global.presentation.dto.AuthMember;
import com.pill.member.domain.Member;
import com.pill.pill.domain.Pill;
import com.pill.pill.repository.PillRepository;
import com.pill.pillschedule.domain.PillSchedule;
import com.pill.pillschedule.domain.ScheduleDay;
import com.pill.pillschedule.dto.PillAddDto;
import com.pill.pillschedule.dto.PillScheduleDetailDto;
import com.pill.pillschedule.repository.PillScheduleRepository;
import com.pill.pillschedule.repository.ScheduleDayRepository;
import java.time.DayOfWeek;
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
    private final PillRepository pillRepository;
    private final ScheduleDayRepository scheduleDayRepository;

    @Transactional
    public Long pillSave(AuthMember authMember, PillAddDto pillAddDto) {
        Pill pill = pillRepository.findById(pillAddDto.pillId()).orElseThrow(() -> new CoreException("존재하지 않는 알약입니다."));

        PillSchedule pillSchedule = PillSchedule.builder()
                .member(Member.Id(authMember.memberId()))
                .pillName(pillAddDto.pillName())
                .pill(pill)
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

    public List<PillScheduleDetailDto> findPillSchedule(Long memberId, LocalDate date) {
        String day = getDay(date.getDayOfWeek());
        List<PillSchedule> pillSchedules = scheduleDayRepository.findByDay(day, Member.Id(memberId));
        return pillSchedules.stream()
                .map(pillSchedule -> new PillScheduleDetailDto(
                        pillSchedule.getId(),
                        pillSchedule.getPillName(),
                        pillSchedule.getPill().getImageUrl(),
                        pillSchedule.isBreakfast(),
                        pillSchedule.isLunch(),
                        pillSchedule.isDinner()
                ))
                .toList();
    }

    public String getDay(DayOfWeek dayOfWeek) {
        int value = dayOfWeek.getValue();
        return switch (value) {
            case 1 -> "월";
            case 2 -> "화";
            case 3 -> "수";
            case 4 -> "목";
            case 5 -> "금";
            case 6 -> "토";
            case 7 -> "일";
            default -> null;
        };
    }
}
