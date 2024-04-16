package com.pill.member.service;

import com.pill.member.domain.Member;
import com.pill.member.domain.PillSchedule;
import com.pill.member.dto.PillAddDto;
import com.pill.member.exception.MemberException;
import com.pill.member.repository.MemberRepository;
import com.pill.member.repository.PillScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PillService {

    private final PillScheduleRepository pillScheduleRepository;
    private final MemberRepository memberRepository;

    @Transactional
    public Long pillSave(PillAddDto pillAddDto) {
        Optional<Member> member = memberRepository.findById(pillAddDto.memberId());

        if (member.isEmpty())
            throw new MemberException.NotFoundMemberException();

        PillSchedule pillSchedule = new PillSchedule(member.get(), pillAddDto.pillName(), pillAddDto.frequency(), pillAddDto.isBreakfast(),
                pillAddDto.isLunch(), pillAddDto.isDinner(), pillAddDto.startDate());

        pillSchedule = pillScheduleRepository.save(pillSchedule);
        return pillSchedule.getId();
    }
}
