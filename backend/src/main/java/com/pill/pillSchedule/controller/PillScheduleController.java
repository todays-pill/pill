package com.pill.pillSchedule.controller;

import com.pill.global.presentation.AuthPrincipal;
import com.pill.global.presentation.dto.AuthMember;
import com.pill.global.response.ResponseApi;
import com.pill.pillSchedule.dto.PillAddDto;
import com.pill.pillSchedule.dto.PillAddResponseDto;
import com.pill.pillSchedule.service.PillScheduleService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/pill")
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
}
