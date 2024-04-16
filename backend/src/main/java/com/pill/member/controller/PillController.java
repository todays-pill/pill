package com.pill.member.controller;

import com.pill.global.response.ResponseApi;
import com.pill.member.dto.PillAddDto;
import com.pill.member.dto.PillAddResponseDto;
import com.pill.member.service.PillService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/pill")
@RequiredArgsConstructor
public class PillController {

    private final PillService pillService;

    @PostMapping("/add")
    public ResponseEntity<ResponseApi<PillAddResponseDto>> pillAdd(@ModelAttribute PillAddDto addDto) {

        Long id = pillService.pillSave(addDto);

        return ResponseApi.createSuccess(HttpStatus.OK, "알약 등록 성공", new PillAddResponseDto(id));
    }
}
