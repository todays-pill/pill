package com.pill.pillSchedule.service;

import com.pill.global.presentation.dto.AuthMember;
import com.pill.member.domain.Member;
import com.pill.pillSchedule.domain.PillSchedule;
import com.pill.pillSchedule.dto.PillAddDto;
import com.pill.pillSchedule.repository.PillScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PillScheduleService {

    private final PillScheduleRepository pillScheduleRepository;

    @Transactional
    public Long pillSave(AuthMember authMember, PillAddDto pillAddDto) {

        PillSchedule pillSchedule = new PillSchedule(
                Member.Id(authMember.memberId()),
                pillAddDto.pillName(),
                pillAddDto.frequency(),
                pillAddDto.isBreakfast(),
                pillAddDto.isLunch(),
                pillAddDto.isDinner(),
                LocalDate.now());

        pillSchedule = pillScheduleRepository.save(pillSchedule);
        return pillSchedule.getId();
    }
}
