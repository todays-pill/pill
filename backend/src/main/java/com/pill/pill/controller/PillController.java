package com.pill.pill.controller;

import com.pill.global.response.ResponseApi;
import com.pill.pill.dto.PillDetailDto;
import com.pill.pill.service.PillService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("pill")
@RequiredArgsConstructor
public class PillController {

    private final PillService pillService;

    @PostMapping("ai")
    public ResponseEntity<ResponseApi<PillDetailDto>> searchPill(@RequestPart("front") MultipartFile frontImage, @RequestPart("back") MultipartFile backImage) {
        // 파일을 저장하거나 처리하는 로직
        PillDetailDto pillDetailDto = pillService.searchPill(frontImage, backImage);
        return ResponseApi.createSuccess(HttpStatus.OK, pillDetailDto);
    }
}
