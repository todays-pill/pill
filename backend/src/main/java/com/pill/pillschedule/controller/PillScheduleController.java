package com.pill.pillschedule.controller;

import com.pill.global.presentation.AuthPrincipal;
import com.pill.global.presentation.dto.AuthMember;
import com.pill.global.response.ResponseApi;
import com.pill.pillschedule.dto.PillAddDto;
import com.pill.pillschedule.dto.PillAddResponseDto;
import com.pill.pillschedule.dto.PillScheduleDetailDto;
import com.pill.pillschedule.service.PillScheduleService;
import jakarta.validation.Valid;
import java.time.LocalDate;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/pill-schedule")
@RequiredArgsConstructor
public class PillScheduleController {

    private final PillScheduleService pillScheduleService;

    @PostMapping
    public ResponseEntity<ResponseApi<PillAddResponseDto>> pillAdd(
            @AuthPrincipal AuthMember authMember,
            @RequestBody @Valid PillAddDto addDto) {

        Long id = pillScheduleService.pillSave(authMember, addDto);

        return ResponseApi.createSuccess(HttpStatus.OK, "알약 등록 성공", new PillAddResponseDto(id));
    }

    @GetMapping("today")
    public ResponseEntity<ResponseApi<List<PillScheduleDetailDto>>> findPillSchedule(@AuthPrincipal AuthMember authMember) {
        List<PillScheduleDetailDto> pillSchedules = pillScheduleService.findPillSchedule(authMember.memberId(),
                LocalDate.now());

        return ResponseApi.createSuccess(HttpStatus.OK, "알약 스케줄 조회 성공", pillSchedules);
    }
}
